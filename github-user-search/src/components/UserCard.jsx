import React from "react";

function UserCard({ user }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white p-6 border border-gray-200 transform transition duration-300 hover:scale-105">
      {/* User Avatar */}
      <div className="flex justify-center mb-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md"
        />
      </div>

      {/* User Info */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h3>
        <p className="text-xl text-gray-600 mb-2">@{user.login}</p>
        {user.bio && (
          <p className="text-sm text-gray-500 mb-4 px-4">{user.bio}</p>
        )}

        {/* Stats */}
        <div className="flex justify-around text-gray-700 text-sm mb-4">
          <div>
            <p className="font-semibold">{user.public_repos}</p>
            <p>Repos</p>
          </div>
          <div>
            <p className="font-semibold">{user.followers}</p>
            <p>Followers</p>
          </div>
          <div>
            <p className="font-semibold">{user.following}</p>
            <p>Following</p>
          </div>
        </div>

        {/* GitHub Profile Link */}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg transition duration-300"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserCard;
