import axios from "axios";

// Load API key from .env file
const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export default githubApi;
