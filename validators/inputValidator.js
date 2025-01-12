const validateRegistration = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    if (password.length < 8) {
        return res.status(400).json({ error: "Password must be at least 8 characters long." });
    }

    next();
};

const validatePreferences = (req, res, next) => {
    const { categories, languages } = req.body;

    if (!Array.isArray(categories) || !Array.isArray(languages)) {
        return res.status(400).json({ error: "Categories and languages must be arrays." });
    }

    if (categories.length === 0 || languages.length === 0) {
        return res.status(400).json({ error: "Categories and languages cannot be empty." });
    }

    next();
};

module.exports = { validateRegistration, validatePreferences };
