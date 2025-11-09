import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000; // Use Railway's dynamic port

// Middleware
app.use(bodyParser.json());

// A2A endpoint
app.post("/api/a2a", (req, res) => {   // ✅ Updated route to match Telex JSON
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ status: "error", message: "No message provided" });
  }

  // For now, echo the message
  res.json({
    status: "success",
    originalMessage: message,
    summary: message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Codexa-Agent running on port ${PORT}`);
});
