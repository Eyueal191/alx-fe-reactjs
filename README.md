
# GitHub User Search App

A React-based application that allows users to search for GitHub users by username and view their profile details. This app fetches data from the GitHub API and displays key user information, such as name, avatar, and other profile details, in an intuitive and clean interface.

## Features

- **Search for GitHub users**: Enter a GitHub username to fetch user data and display profile information.
- **Profile Information Display**: Shows the user's name, avatar, location, bio, followers, public repositories, and more.
- **Loading State**: Displays a "Loading..." message while fetching data from the API.
- **Error Handling**: If the username is invalid or an error occurs, an error message is displayed.
- **Clear Search**: Allows users to clear the current search results and start a new search.
- **Responsive Design**: The app is designed to be fully responsive and works across multiple devices (desktops, tablets, and mobile).

## Technologies Used

- **React**: JavaScript library for building dynamic and interactive user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used for fast, responsive UI design.
- **Axios**: A promise-based HTTP client used to make requests to the GitHub API.
- **GitHub API**: A public API used to fetch GitHub user data (name, avatar, followers, repos, etc.).

## Installation Instructions

To get started with this project, follow these steps:

### 1. Clone the repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/github-user-search.git
```

### 2. Navigate to the project directory

After cloning, navigate to the project directory:

```bash
cd github-user-search
```

### 3. Install dependencies

Install the necessary project dependencies using npm:

```bash
npm install
```

### 4. Start the development server

Run the following command to start the app:

```bash
npm run dev
```

Once the server starts, the app should be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project is organized into the following structure:

```
github-user-search/
├── public/
│   ├── index.html            # The root HTML file for the app
│   └── favicon.ico           # Favicon for the app
├── src/
│   ├── components/
│   │   └── SearchBar.js      # Component for the search bar to enter username
│   ├── services/
│   │   └── githubService.js  # Service for making GitHub API requests
│   ├── App.js                # Main component for app logic and UI
│   ├── index.css             # Main CSS file for Tailwind CSS styling
│   └── index.js              # Entry point for the React app
├── tailwind.config.js        # Configuration for Tailwind CSS
├── postcss.config.js         # Configuration for PostCSS
└── package.json              # Project metadata, dependencies, and scripts
```

### Key Files:

- **`src/App.js`**: Contains the core logic and state management for the app. It handles the API request, error handling, and conditional rendering.
- **`src/components/SearchBar.js`**: The component that allows users to input a GitHub username and initiate the search.
- **`src/services/githubService.js`**: Contains the API request logic to fetch user data from the GitHub API.
- **`src/index.css`**: Global CSS file where Tailwind CSS is imported and custom styles are applied.

## How It Works

1. **User Input**: Users enter a GitHub username into the search bar.
2. **API Call**: The app makes an HTTP request to the GitHub API using Axios to fetch the user's data.
3. **Displaying Data**: Upon success, the app renders the user's name, avatar, location, followers count, and more.
4. **Loading State**: While data is being fetched, a loading message is displayed to the user.
5. **Error Handling**: If an error occurs (e.g., user not found), the app displays an error message.
6. **Clear Button**: Users can click the "Clear" button to reset the app and start a new search.

## Contributing

We welcome contributions to this project! Here’s how you can contribute:

1. **Fork the repository**: Click the "Fork" button on GitHub to create a personal copy of the repository.
2. **Clone your fork**: Clone the forked repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/github-user-search.git
    ```

3. **Create a new branch**: 

    ```bash
    git checkout -b new-feature
    ```

4. **Make your changes**: Edit the files and add your feature or fix the issue.
5. **Commit your changes**:

    ```bash
    git commit -am 'Add new feature'
    ```

6. **Push to your branch**:

    ```bash
    git push origin new-feature
    ```

7. **Open a Pull Request**: Navigate to the original repository and create a pull request with a clear description of what you’ve changed.

## Contact Information

If you have any questions or feedback, feel free to reach out:

- **Email**: eyuealayalew191@example.com
- **GitHub**: [github.com/Eyueal191](https://github.com/Eyueal191)

---
```

