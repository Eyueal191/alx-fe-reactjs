import axios from "axios";

// Define the base URL, either from environment variables or fallback to the default GitHub API URL
let baseUrl =
  import.meta.env.VITE_GITHUB_API_BASE_URL || "https://api.github.com";

// Explicitly declare the search URL as a string
const searchUsersUrl = "https://api.github.com/search/users?q=";

// Function to search GitHub users based on query parameters
async function searchUsers(query, location = "", minRepos = 0) {
  try {
    // Construct the search URL with the declared base search URL
    // Add location filter if provided
    if (location) {
      const locationSearchUrl = `${searchUrl}+location:${location}`;
      console.log("GitHub Search URL with location:", locationSearchUrl);

      // Make the GET request using Axios
      let resp = await axios.get(locationSearchUrl);
      let users = resp.data.items.filter(
        (user) => user.public_repos >= minRepos
      );

      return users;
    } else {
      // Make the GET request using Axios without location
      let resp = await axios.get(searchUrl);
      let users = resp.data.items.filter(
        (user) => user.public_repos >= minRepos
      );

      return users;
    }
  } catch (error) {
    // Throw the error to handle it elsewhere if needed
    throw error;
  }
}

// Function to fetch user data by username
async function fetchUserData(username) {
  try {
    let resp = await axios.get(userUrl);
    let data = resp.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export { fetchUserData, searchUsers };
