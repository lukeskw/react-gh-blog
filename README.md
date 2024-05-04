<h1 align="center">GitBlog</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]() <br>

</div>

---

## 📝 Table of Contents <a name = "en"></a>

- **[About](#about_en)**
- **[Application Running](#application_running)**
- **[Getting Started](#getting_started_en)**
- **[Requirements](#requirements)**
- **[Technologies](#built_using_en)**

## 📚 About <a name = "about_en"></a>

GitHub Issue Blog is an application that utilizes the GitHub API to fetch issues from a repository and display them as blog posts.

## ➡ Application Running <a name = "application_running"></a>

<p align="center">

</p>

## 🏁 Getting Started <a name = "getting_started_en"></a>

These instructions will allow you to get a copy of the project and run the application locally for development and testing purposes.

### Prerequisites

- First, you need to have NodeJS installed on your machine. To do this, access the official NodeJS website by clicking [here](https://nodejs.org/) and follow the installation instructions for your operating system.<br />

### Installation

1. Clone the repository using the command or download the .zip file and extract the contents:

   ```sh
   git clone https://github.com/lukeskw/react-gh-blog.git
   ```

2. Access the project folder

3. Install the project dependencies

   ```sh
   npm install
   ```

4. Run the project in development mode

   ```sh
   npm run dev
   ```

## 🔧 Requirements <a name = "requirements"></a>

### Functional Requirements:

- Displaying your GitHub profile information, including image, followers count, name, etc.
- Listing and filtering all issues from the repository with a brief summary of their content.
- Creating a page to display a complete post (issue).

### Non-functional Requirements:

- Proper routing and navigation between different pages of the application.
- Fetching data from the GitHub API to display profile information and issues.
- Implementing forms for filtering and navigating through issues.

### Business Rules:

- Ensure that the application doesn't exceed the rate limit imposed by the GitHub API when making requests for fetching user profile information and repository issues.
- Implement proper error handling and feedback mechanisms if rate limits are reached.
- Ensure that the fetched data from the GitHub API, including user profile information and repository issues, is accurate and up-to-date

## ⛏️ Technologies <a name = "built_using_en"></a>

- [x] [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static type definitions, enhancing code quality and developer productivity.
- [x] [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces, providing a component-based architecture and efficient rendering.
- [x] [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework used for styling, providing a low-level utility approach for building custom designs.
- [x] [Tailwind Merge](https://github.com/tailwindlabs/tailwindcss-merge) - A Tailwind CSS plugin that adds utilities for merging utility classes, enabling more flexible and concise styling.
- [x] [Vite](https://vitejs.dev/) - A blazing fast build tool for modern web development, offering instant server start and optimized build times.
- [x] [Axios](https://axios-http.com/) - A promise-based HTTP client for making requests to APIs, used for handling asynchronous operations in web applications.
- [x] [Day.js](https://day.js.org/) - A lightweight and fast JavaScript library for parsing, validating, manipulating, and formatting dates.
- [x] [Phosphor React](https://phosphoricons.com) - A library of SVG icons as React components, offering a collection of customizable for use in web applications.
