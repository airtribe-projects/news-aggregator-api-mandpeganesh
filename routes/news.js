const express = require("express");
const { getNews } = require("../controllers/newsController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected route
router.get("/news", authenticateToken, getNews);

module.exports = router;
