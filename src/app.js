// src/app.js
import express from "express";
import bodyParser from "body-parser";
import CodexaAgent from "./agents/codexa-agent.js";

const app = express();

// Use Railway dynamic port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Initialize agent
const agent = new CodexaAgent();

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Codexa-Agent is live!");
});

// A2A POST endpoint
app.post("/a2a/agent/codexa", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      status: "error",
      message: "No message provided",
    });
  }

  // Process message through CodexaAgent
  const response = agent.handleMessage(message);

  res.json(response);
});

// Start server
app.listen(PORT, () => {
  console.log(`Codexa-Agent running on port ${PORT}`);
});
