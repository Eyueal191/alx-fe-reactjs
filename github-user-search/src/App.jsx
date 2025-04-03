import React, { useState, useEffect } from "react";
import SearchBar from "./components/Search";
import fetchUserData from "./services/githubService.js";

function App() {
  const [username, setUsername] = useState(""); // Input username
  const [user, setUser] = useState(null); // Fetched user data
  const [error, setError] = useState(null); // Error handling
  const [loading, setLoading] = useState(false); // Loading indicator

  useEffect(() => {
    if (!username.trim()) {
      setUser(null);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchUserData(username);
        setUser(data);
        setError(null);
      } catch (err) {
        setError(`User "${username}" not found.`);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      {/* Header */}
      <header className="w-full max-w-3xl text-center py-5">
        <h1 className="text-3xl font-bold tracking-wide text-blue-400">
          GitHub User Search
        </h1>
      </header>

      {/* Search Bar */}
      <SearchBar setUsername={setUsername} />

      {/* Main Content */}
      <main className="flex flex-col items-center w-full max-w-lg mt-6">
        {loading && <h1 className="text-blue-300 text-xl">Searching...</h1>}
        {error && <p className="text-red-500 text-lg">{error}</p>}

        {user && (
          <div className="max-w-sm w-full rounded-xl overflow-hidden shadow-2xl bg-gray-800 p-6 border border-gray-700 transform transition duration-300 hover:scale-105 mt-6">
            {/* User Avatar */}
            <div className="flex justify-center mb-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
            {/* User Info */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                {user.name || "No Name"}
              </h3>
              <p className="text-lg text-gray-400">@{user.login}</p>
              {user.bio && (
                <p className="text-sm text-gray-300 mt-2">{user.bio}</p>
              )}

              {/* Stats */}
              <div className="flex justify-around text-gray-300 text-sm mt-4">
                <div>
                  <p className="font-semibold text-xl">{user.public_repos}</p>
                  <p>Repos</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">{user.followers}</p>
                  <p>Followers</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">{user.following}</p>
                  <p>Following</p>
                </div>
              </div>

              {/* GitHub Profile Link */}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300 mt-4"
              >
                View Profile
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-5">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
          onClick={() => setUsername("")}
        >
          Clear
        </button>
      </footer>
    </div>
  );
}

export default App;
