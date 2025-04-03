import React, { useState } from "react";

function SearchBar({ setUsername }) {
  const [inputValue, setInputValue] = useState(""); // Local state for input field

  // Submit handler
  function submitHandler(e) {
    e.preventDefault();
    setUsername(inputValue.trim()); // Pass trimmed username to parent
  }

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-lg bg-gray-800 text-white p-6 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center"
    >
      <h2 className="text-2xl font-semibold text-blue-300 mb-6">
        Search GitHub Users
      </h2>

      <div className="flex flex-col sm:flex-row w-full space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Input Field */}
        <input
          type="text"
          value={inputValue} // Controlled input
          onChange={(e) => setInputValue(e.target.value)} // Update local state
          placeholder="Enter GitHub username..."
          className="flex-1 p-4 text-xl rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 mt-4 sm:mt-0"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
