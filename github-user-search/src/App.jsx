import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 text-gray-800">
      <header className="py-6 shadow bg-white">
        <h1 className="text-3xl font-bold text-center">🔍 GitHub User Search</h1>
        <p className="text-center text-sm text-gray-600 mt-1">Find developers by username, location & repo count</p>
      </header>

      <main className="p-4 max-w-4xl mx-auto">
        <Search />
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} GitHub Search App • Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
