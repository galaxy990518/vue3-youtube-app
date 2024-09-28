const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

const videosData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "videosData.json"), "utf-8")
);

const shortsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "shortsData.json"), "utf-8")
);

const authenticateUser = (req, res, next) => {
  const { username, password } = req.body;
  if (username === "tinadmin" && password === "tinadmin") {
    next();
  } else {
    res.status(401).json({ message: "Authentication failed" });
  }
};

// API route
app.post("/api/login", authenticateUser, (req, res) => {
  res.json({ message: "Login successful" });
});

app.get("/api/get_video_data", (req, res) => {
  setTimeout(() => {
    res.json(videosData);
  }, 3000); // Simulate API processing time
});

app.get("/api/get_shorts_data", (req, res) => {
  res.json(shortsData);
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
