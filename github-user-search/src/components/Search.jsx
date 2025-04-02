import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h3>{user.login}</h3>
      <p>{user.name}</p>
      <p>Location: {user.location}</p>

      <p>Public Repositories: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit Profile
      </a>
    </div>
  );
};

export default UserCard;
