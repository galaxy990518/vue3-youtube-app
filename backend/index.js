const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

const videosData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "videosData.json"), "utf-8")
);

// API rout
app.get("/api/get_video_data", (req, res) => {
  res.json(videosData);
});

// For all other routes, return the main index.html file
// This allows the frontend routing to take over
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
