const User = require("../models/user");
const { fetchNews } = require("../services/newsService");

exports.getNews = async (req, res) => {
    try {
        // Get user preferences
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const preferences = user.preferences;

        // Fetch news articles based on preferences
        const articles = await fetchNews(preferences);

        if (!articles.length) {
            return res.status(404).json({ message: "No articles found for your preferences" });
        }

        res.status(200).json({ articles });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch news",
            error: error.message,
        });
    }
};
