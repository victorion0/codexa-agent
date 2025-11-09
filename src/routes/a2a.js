// src/routes/a2a.js
import express from "express";
import CodexaAgent from "../agents/codexa-agent.js"; // ✅ Add .js extension for ESM

const router = express.Router();
const agent = new CodexaAgent();

// POST /api/a2a
router.post("/", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ status: "error", message: "No message provided" });
  }

  const response = agent.handleMessage(message);
  res.json(response);
});

// Optional GET endpoint for health check
router.get("/", (req, res) => {
  res.send("Codexa-Agent A2A endpoint is live!");
});

export default router;
