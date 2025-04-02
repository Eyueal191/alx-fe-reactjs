import React from "react";

function SearchBar({ setUsername }) {
  // Submit handler
  function submithandler(e) {
    e.preventDefault();
    let formdata = new FormData(e.target);
    let value = formdata.get("username");
    setUsername(value);
  }

  return (
    <form
      onSubmit={submithandler}
      className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md w-full max-w-sm mx-auto h-[10vh]"
    >
      <h1 className="text-xl font-semibold text-gray-700">Search Bar</h1>
      <div className="flex flex-row justify-between items-center space-x-2">
        <input
          type="text"
          name="username"
          placeholder="Enter username..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
