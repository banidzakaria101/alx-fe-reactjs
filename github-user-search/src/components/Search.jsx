import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService'; 

function Search() {
  const [form, setForm] = useState({
    username: '',
    location: '',
    minRepos: '',
  });

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setResults([]);
    await performSearch(1, true);
  };

  const performSearch = async (pageToSearch, reset = false) => {
    if (!form.username) return;
    setLoading(true);
    setError('');

    try {
      const data = await searchUsers(form, pageToSearch);
      if (data.users.length === 0) {
        setError('Looks like we cant find the user');
      }
      setResults((prev) => (reset ? data.users : [...prev, ...data.users]));
      setHasMore(data.hasMore);
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await performSearch(nextPage);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          placeholder="Username (required)"
          value={form.username}
          onChange={handleChange}
          className="border w-full p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border w-full p-2 rounded"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Public Repos"
          value={form.minRepos}
          onChange={handleChange}
          min="0"
          className="border w-full p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {results.map((user) => (
          <div key={user.id} className="bg-white rounded-xl shadow p-4 flex items-center hover:shadow-md transition">
            <img src={user.avatar_url} alt="avatar" className="w-20 h-20 rounded-full mr-4 border" />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">{user.login}</h3>
              {user.location && <p className="text-sm text-gray-600">📍 {user.location}</p>}
              <p className="text-sm text-gray-700">Public Repos: <strong>{user.public_repos}</strong></p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-500 underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <button onClick={loadMore} className="mt-6 w-full p-2 bg-gray-200 hover:bg-gray-300 rounded">
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
