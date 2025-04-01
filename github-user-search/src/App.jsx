import { useState } from "react";
import githubApi from "./services/github.Api";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    if (!username) return;

    try {
      const response = await githubApi.get(`/users/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUserData(null);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h2>{userData.name || "No Name"}</h2>
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <p>
            <strong>Username:</strong> {userData.login}
          </p>
          <p>
            <strong>Public Repos:</strong> {userData.public_repos}
          </p>
          <p>
            <strong>Followers:</strong> {userData.followers}
          </p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
