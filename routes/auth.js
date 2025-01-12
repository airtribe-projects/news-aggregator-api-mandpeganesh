const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const { validateRegistration, validatePreferences } = require('../validators/inputValidator');
const { updatePreferences } = require('../controllers/preferencesController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post("/register", validateRegistration, registerUser);
router.post("/login", loginUser);

router.put('/preferences', authenticate, validatePreferences, updatePreferences);

module.exports = router;
