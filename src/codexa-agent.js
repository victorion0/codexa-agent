// src/agents/codexa-agent.js
import summarizeMessage from "../utils/summarizer.js"; // ✅ ESM import, include .js

class CodexaAgent {
  constructor(name = "Codexa") {
    this.name = name;
  }

  handleMessage(message) {
    if (!message) {
      return {
        status: "error",
        error: "No message provided",
      };
    }

    const summary = summarizeMessage(message);
    return {
      status: "success",
      originalMessage: message,
      summary,
    };
  }
}

export default CodexaAgent; // ✅ ESM export
