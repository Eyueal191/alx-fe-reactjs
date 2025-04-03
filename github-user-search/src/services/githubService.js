import axios from "axios";

let baseUrl =
  import.meta.env.VITE_GITHUB_API_BASE_URL || "https://api.github.com";

// Function to search GitHub users based on query parameters
async function searchUsers(query, location = "", minRepos = 0) {
  try {
    // Construct the search URL
    let searchUrl = `${baseUrl}/search/users?q=${query}`;

    // Add location filter if provided
    if (location) {
      searchUrl += `+location:${location}`;
    }

    // Make the GET request using Axios
    let resp = await axios.get(searchUrl);

    // Filter users with repositories greater than minRepos
    let users = resp.data.items.filter((user) => user.public_repos >= minRepos);

    // Return filtered users
    return users;
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error fetching users:", error);

    // Throw the error to handle it elsewhere if needed
    throw error;
  }
}

// Function to fetch user data by username
async function fetchUserData(username) {
  try {
    let resp = await axios.get(`${baseUrl}/users/${username}`);
    let data = resp.data;
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

export { fetchUserData, searchUsers };
