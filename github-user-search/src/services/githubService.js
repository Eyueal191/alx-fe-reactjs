import axios from "axios";

let baseUrl = import.meta.env.VITE_GITHUB_API_BASE_URL;

async function fetchUserData(username) {
  try {
    // Make the GET request using Axios
    let resp = await axios.get(`${baseUrl}/users/${username}`);

    // Directly access the response data
    let data = resp.data;

    // Return the data
    return data;
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error fetching user data:", error);

    // Throw the error to handle it elsewhere if needed
    throw error;
  }
}
export default fetchUserData;
