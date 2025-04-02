import React, { useEffect, useState } from "react";
import SearchBar from "./components/Search";
import UserCard from "./components/UserCard";
import GetUserData from "./services/githubservice.js"; // Ensure file name is correct

function App() {
  const [username, setUsername] = useState(""); // Default to an empty string
  const [user, setUser] = useState(null); // Set initial user state to null
  const [error, setError] = useState(null); // Set initial error state to null

  useEffect(() => {
    if (!username) return; // Prevent calling API if username is empty

    const getData = async () => {
      try {
        const data = await GetUserData(username); // Fetch data from service
        setUser(data); // Set user data
        setError(null); // Reset previous errors
      } catch (err) {
        setError("Oops! We couldn't find the user."); // Set error state
        setUser(null); // Clear user data on error
      }
    };

    getData(); // Call function to fetch data
  }, [username]); // Re-run effect when username changes

  return (
    <>
      <header className="flex justify-center w-full py-5 border-2 border-red-500 h-[20vh]">
        <SearchBar setUsername={setUsername} /> {/* Pass setUsername as prop */}
      </header>

      <main className="flex justify-center w-full min-h-[70vh] border-2">
        {error ? (
          <p>{error}</p>
        ) : user ? (
          <UserCard user={user} /> // Pass user data to UserCard component
        ) : (
          <p>Loading...</p>
        )}
      </main>

      <footer className="flex justify-center items-center h-[10vh] border-2">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={() => setUsername("")} // Clear search input
        >
          Clear
        </button>
      </footer>
    </>
  );
}

export default App;
