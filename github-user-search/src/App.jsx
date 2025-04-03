import React, { useState, useEffect } from "react";
import fetchUserData from "./services/githubService";
import SearchBar from "./components/SearchBar";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const getUserData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUserData(username);
        setUser(data);
        setError(null);
      } catch (error) {
        setError("User not found");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">GitHub User Search</h1>
      </header>
      <main className="flex justify-center items-center py-8">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <SearchBar
            setUsername={setUsername}
            user={user}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
