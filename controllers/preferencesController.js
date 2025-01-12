const User = require("../models/user");

// GET /preferences
exports.getPreferences = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ preferences: user.preferences });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// PUT /preferences
exports.updatePreferences = async (req, res) => {
    const { categories, languages } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update preferences
        user.preferences = { categories, languages };
        await user.save();

        res.status(200).json({ message: "Preferences updated successfully", preferences: user.preferences });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
