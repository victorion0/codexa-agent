// src/index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Helper function to summarize messages
function summarizeMessage(message) {
  if (!message) return "";
  // Basic summarization: first 15 words
  const words = message.split(" ");
  return words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");
}

// A2A endpoint for Telex.im
app.post("/a2a", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      status: "error",
      error: "No message provided",
    });
  }

  const summary = summarizeMessage(message);

  // Response must be valid JSON for Telex.im
  return res.json({
    status: "success",
    originalMessage: message,
    summary: summary,
  });
});

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Codexa-Agent is running!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Codexa-Agent running on port ${PORT}`);
});
