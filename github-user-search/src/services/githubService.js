import axios from 'axios';

export async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
}

export async function searchUsers({ username, location, minRepos }, page = 1) {
  let query = `${username} in:login type:user`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`;

  const response = await axios.get(url);
  const users = response.data.items;

  const detailedUsers = await Promise.all(
    users.map(user =>
      fetchUserData(user.login).catch(() => null)
    )
  );

  return {
    users: detailedUsers.filter(Boolean),
    hasMore: response.data.total_count > page * 10,
  };
}
