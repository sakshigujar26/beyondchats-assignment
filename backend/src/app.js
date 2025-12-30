const express = require("express");
const articleRoutes = require("./routes/articleRoutes");

const app = express();

// 🔴 THIS MUST BE BEFORE ROUTES
app.use(express.json());

app.use("/api/articles", articleRoutes);

module.exports = app;
