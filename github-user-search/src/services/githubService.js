import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.github.com' });

export async function searchUsers({ username, location, minRepos }, page = 1) {
  let query = `${username} in:login type:user`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const res = await api.get('/search/users', {
    params: {
      q: query,
      per_page: 10,
      page,
    },
  });

  const users = res.data.items;

  const detailedUsers = await Promise.all(
    users.map(u =>
      api.get(`/users/${u.login}`).then(r => r.data).catch(() => null)
    )
  );

  return {
    users: detailedUsers.filter(Boolean),
    hasMore: res.data.total_count > page * 10,
  };
}
