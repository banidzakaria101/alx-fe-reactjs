import axios from 'axios';

export async function searchUsers({ username, location, minRepos }, page = 1) {
  let query = `${username} in:login type:user`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;


  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`;

  const res = await axios.get(url);

  const users = res.data.items;

  const detailedUsers = await Promise.all(
    users.map(u =>
      axios.get(`https://api.github.com/users/${u.login}`).then(r => r.data).catch(() => null)
    )
  );

  return {
    users: detailedUsers.filter(Boolean),
    hasMore: res.data.total_count > page * 10,
  };
}
