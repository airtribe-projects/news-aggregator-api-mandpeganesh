const axios = require("axios");

const fetchNews = async (preferences) => {
    const { categories, languages } = preferences;

    // Construct query parameters based on preferences
    const categoryQuery = categories?.join(",") || "general";
    const languageQuery = languages?.join(",") || "en";
    const today = new Date("2024-12-11").toISOString().split("T")[0];

    try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
            params: {
                q: categoryQuery,
                from: today,
                sortBy: "popularity",
                language: languageQuery,
                apiKey: process.env.NEWS_API_KEY,
            },
        });

        return response.data.articles;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || "Failed to fetch news articles"
        );
    }
};

module.exports = { fetchNews };
