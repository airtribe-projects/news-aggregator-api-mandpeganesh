const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const preferencesRoutes = require("./routes/preferences");
const newsRoutes = require("./routes/news");
const errorHandler = require('./middleware/errorHandler');

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", preferencesRoutes);
app.use("/api", newsRoutes);
app.use(errorHandler);

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;