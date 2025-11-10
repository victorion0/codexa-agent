import express from "express";
import { randomUUID } from "crypto";
import CodexaAgent from "../agents/codexa-agent.js";

const router = express.Router();
const agent = new CodexaAgent();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const { jsonrpc, id, params } = body;

    if (jsonrpc !== "2.0" || !id) {
      return res.status(400).json({
        jsonrpc: "2.0",
        id: id || null,
        error: {
          code: -32600,
          message: 'Invalid request: must include "jsonrpc": "2.0" and an id'
        }
      });
    }

    // Extract Telex message text
    const userMessage =
      params?.message?.parts?.[0]?.text ||
      params?.messages?.[0]?.parts?.[0]?.text ||
      "";

    if (!userMessage) {
      return res.status(400).json({
        jsonrpc: "2.0",
        id,
        error: { code: -32602, message: "Missing message text" }
      });
    }

    // Process message through your CodexaAgent
    const response = agent.handleMessage(userMessage);
    const replyText = response.summary || "No response generated.";

    // Build A2A-compliant response
    return res.json({
      jsonrpc: "2.0",
      id,
      result: {
        id: randomUUID(),
        status: {
          state: "completed",
          timestamp: new Date().toISOString(),
          message: {
            role: "agent",
            parts: [{ kind: "text", text: replyText }],
            kind: "message"
          }
        }
      }
    });
  } catch (err) {
    console.error("A2A error:", err);
    res.status(500).json({
      jsonrpc: "2.0",
      id: null,
      error: { code: -32603, message: "Internal error", data: err.message }
    });
  }
});

router.get("/", (req, res) => {
  res.send("Codexa-Agent A2A endpoint is live!");
});

export default router;
