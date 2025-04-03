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
      <h2 className="text-2xl font-semibold text-blue-300 mb-4">
        Search GitHub Users
      </h2>

      <div className="flex w-full space-x-3">
        {/* Input Field */}
        <input
          type="text"
          value={inputValue} // Controlled input
          onChange={(e) => setInputValue(e.target.value)} // Update local state
          placeholder="Enter GitHub username..."
          className="flex-1 p-3 text-lg rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
