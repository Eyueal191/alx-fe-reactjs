import React, { useState } from "react";

function SearchBar() {
  const [inputValue, setInputValue] = useState(""); // Input field value
  const [user, setUser] = useState(null); // User data from GitHub
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [repos, setRepos] = useState([]); // Repositories data
  const [location, setLocation] = useState(""); // Location filter

  // Function to fetch user data and repositories from GitHub API
  const fetchUserData = async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null);
    setRepos([]); // Clear previous repos

    try {
      // Fetch user data with location filter
      const userResponse = await fetch(
        `https://api.github.com/search/users?q=${username}+location:${location}`
      );
      if (!userResponse.ok) throw new Error("User not found");

      const userData = await userResponse.json();
      setUser(userData.items[0]); // We take the first user match

      // Fetch repositories data
      const reposResponse = await fetch(userData.items[0].repos_url);
      if (!reposResponse.ok) throw new Error("Repositories not found");

      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      setError("Looks like we can't find the user or their repositories");
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
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
          className="border-2 border-gray-300 p-2 w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
              loading="lazy"
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
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-center">Repositories:</h3>
          <ul className="space-y-4 mt-4">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p className="text-gray-600">
                  {repo.description || "No description available"}
                </p>
                <p className="text-gray-500 text-sm">
                  Stars: {repo.stargazers_count}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
