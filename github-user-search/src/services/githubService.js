import axios from "axios";

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;

async function fetchUserData(username) {
  try {
    const url = `${GITHUB_API_URL}/users/${username}`;
    const res = await axios.get(url);
    return res.data; // Return the actual user data
  } catch (err) {
    console.error("Error fetching user data:", err); // Log the error
    throw err; // Throw the actual error to be handled in the calling function
  }
}

export default GetUserData;
