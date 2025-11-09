// src/utils/summarizer.js

function summarizeMessage(message) {
  if (!message) return "";
  const words = message.split(" ");
  return words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");
}

export default summarizeMessage; // ✅ ESM export
