const express = require("express");
const { getPreferences, updatePreferences } = require("../controllers/preferencesController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected routes
router.get("/preferences", authenticateToken, getPreferences);
router.put("/preferences", authenticateToken, updatePreferences);

module.exports = router;
