import axios from "axios";

// Define the base URL, either from environment variables or fallback to the default GitHub API URL
let baseUrl =
  import.meta.env.VITE_GITHUB_API_BASE_URL || "https://api.github.com";

// Function to search GitHub users based on query parameters
async function searchUsers(query, location = "", minRepos = 0) {
  try {
    // Explicitly define the search URL string
    const searchUrl = `${baseUrl}/search/users?q=${query}`;

    // Log the URL to confirm it's using the search endpoint
    console.log("GitHub Search URL:", searchUrl);

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
    // Log the error to the console for debugging
    console.error("Error fetching users:", error);

    // Throw the error to handle it elsewhere if needed
    throw error;
  }
}

// Function to fetch user data by username
async function fetchUserData(username) {
  try {
    const userUrl = `${baseUrl}/users/${username}`;
    console.log("GitHub User Data URL:", userUrl); // Log the user URL for debugging

    let resp = await axios.get(userUrl);
    let data = resp.data;
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

export { fetchUserData, searchUsers };
