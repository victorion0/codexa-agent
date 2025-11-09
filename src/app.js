import express from "express";
import bodyParser from "body-parser";

const app = express();

// Use Railway's port or fallback to 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// A2A endpoint
app.post("/a2a", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ status: "error", message: "No message provided" });
  }

  // Echo the message for now
  res.json({
    status: "success",
    originalMessage: message,
    summary: message
  });
});

// Health check
app.get("/", (req, res) => {
  res.send("Codexa-Agent is live!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Codexa-Agent running on port ${PORT}`);
});
