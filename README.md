[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17674204&assignment_repo_type=AssignmentRepo)


# News Aggregator API

The News Aggregator API is a RESTful service that allows users to fetch personalized news articles based on their preferences. It includes user authentication, preference management, and integration with external news APIs.

## Features
- User Registration and Login with JWT-based Authentication
- Manage User Preferences (categories and languages)
- Fetch News Articles based on Preferences
- Input Validation and Error Handling
- External API Integration (NewsAPI)

## Installation

1. Clone the repository:

2. Install dependencies:
    npm install

3. Create a .env file in the root directory and add the following:
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    NEWS_API_KEY=your_news_api_key

4. Start the server:
    npx nodemon server.js
