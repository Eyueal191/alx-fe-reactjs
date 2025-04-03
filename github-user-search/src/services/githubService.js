import axios from "axios";

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;

const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");

  try {
    const { data } = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch user data: ${error.message}`);
    throw error.response?.status === 404
      ? new Error(`User "${username}" not found`)
      : new Error("An error occurred while fetching user data");
  }
};

export default fetchUserData;
