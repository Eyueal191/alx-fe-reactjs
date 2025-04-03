import React, { useState } from "react";

function SearchBar() {
  const [inputValue, setInputValue] = useState(""); // Input field value
  const [user, setUser] = useState(null); // User data from GitHub
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to fetch user data from GitHub API
  const fetchUserData = async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null); // Clear previous user data when searching

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");

      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError("Looks like we cant find the user"); // Corrected message
    } finally {
      setIsLoading(false);
    }
  };

  // Submit handler for form
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      fetchUserData(inputValue);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form
        onSubmit={submitHandler}
        className="mb-8 flex justify-center space-x-2"
      >
        <input
          type="text"
          name="username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter GitHub username"
          className="border-2 border-gray-300 rounded-l-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Search
        </button>
      </form>

      {isLoading && <p className="text-blue-500 text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {user && (
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="flex justify-center pt-4">
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800"
            />
          </div>
          <div className="text-center py-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {user.login}
            </h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500 transition duration-300"
            >
              View Profile
            </a>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Followers:</strong> {user.followers}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Repos:</strong> {user.public_repos}
              </p>
              {user.location && (
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Location:</strong> {user.location}
                </p>
              )}
              {user.bio && (
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Bio:</strong> {user.bio}
                </p>
              )}
              <p className="text-gray-600 dark:text-gray-300">
                <strong>User Type:</strong> {user.type}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
