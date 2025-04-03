import React from "react";
import SearchBar from "./components/Search.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">GitHub User Search</h1>
      </header>
      <main className="flex justify-center items-center py-8">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <SearchBar />
        </div>
      </main>
    </div>
  );
}

export default App;
