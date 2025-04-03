const fetchUserData = async (username) => {
  if (!username) throw new Error("Username is required");

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`User "${username}" not found`);
  }

  return response.json();
};

export default fetchUserData;
