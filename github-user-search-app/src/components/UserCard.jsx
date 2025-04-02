import React from "react";

function UserCard({ user }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      {/* User Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-gray-300"
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {user.name}
        </h3>
        <p className="text-xl text-gray-600 mb-2">@{user.login}</p>
        {user.bio && <p className="text-sm text-gray-500 mb-4">{user.bio}</p>}

        {/* GitHub Profile Link */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserCard;
