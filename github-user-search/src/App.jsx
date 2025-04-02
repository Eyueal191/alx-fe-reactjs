import React, { useEffect, useState } from "react";
import SearchBar from "./components/Search";
import UserCard from "./components/UserCard";
import GetUserData from "./services/githubService.js"; // Ensure the file exists

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

    const fetchUserData = async () => {
      setLoading(true);
      try {
        const data = await GetUserData(username);
        setUser(data);
        setError(null);
      } catch (err) {
        setError(`User "${username}" not found.`);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  const handleClear = () => {
    setUsername("");
    setUser(null);
    setError(null);
  };

  const renderContent = () => {
    if (loading) return <p>Searching...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (user) return <UserCard user={user} />;
    return <p>Enter a username to search.</p>;
  };

  return (
    <>
      <header className="flex justify-center w-full py-5 h-[20vh]">
        <SearchBar setUsername={setUsername} />
      </header>

      <main className="flex justify-center w-full min-h-[70vh]">
        {renderContent()}
      </main>

      <footer className="flex justify-center items-center h-[10vh]">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={handleClear}
        >
          Clear
        </button>
      </footer>
    </>
  );
}

export default App;
