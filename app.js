const express = require("express");
const Log = require("./logger");

const app = express();
const PORT = 3000;

// 🔹 Success Route
app.get("/success", async (req, res) => {
  console.log("Route hit");
  await Log("backend", "info", "test", "Success route hit");
  res.send("Success");
});

// 🔹 Warning Route
app.get("/warn", async (req, res) => {
  await Log("backend", "warn", "test", "This is a warning");
  res.send("Warning");
});

// 🔹 Error Route
app.get("/error", async (req, res) => {
  await Log("backend", "error", "test", "Error route triggered");
  res.status(500).send("Error");
});

// 🔹 Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});