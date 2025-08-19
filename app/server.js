const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello from Dockerized Node.js App! 🚀");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
