import axios from 'axios';

const tpoken = import.meta.env.VITE_GITHUB_API_KEY;

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: token ? {
    Authorisation: `Barear ${token}`
  }
  : undefined,
});

export function getUser(query){
  return api.get('/search/users', { params: { q:query}})
}

export async function fetchUserData(username) {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
}