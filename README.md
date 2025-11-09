# Codexa Agent

Codexa is an AI agent built for Telex.im using Mastra. It can summarize and explain code snippets in Java, JavaScript, and Python, providing quick insights to developers.

---

## Features

- Handles incoming messages via the A2A protocol.  
- Summarizes messages using a simple AI logic.  
- Modular project structure for easy maintenance and expansion:  
  - `src/agents` → Core agent logic  
  - `src/routes` → API endpoints  
  - `src/utils` → Helper functions  
- Ready for deployment on Railway.  
- Node.js 20.x compatible (as required by Mastra).

---

## Project Structure

codexa-agent/
├─ src/
│ ├─ agents/
│ │ └─ codexa-agent.js
│ ├─ routes/
│ │ └─ a2a.js
│ ├─ app.js
│ └─ utils/
│ └─ summarizer.js
├─ package.json
├─ mastra.config.json
└─ README.md

yaml
Copy code

---

## Scripts

- `npm run dev` → Run Mastra in development mode  
- `npm run build` → Build Mastra agent  
- `npm start` → Start the agent  

---

## Deployment

1. Ensure Node.js >= 20.x is used (as specified in `package.json`).  
2. Deploy the project to Railway (or any Node.js hosting platform).  
3. Use your deployed URL as the A2A endpoint in Telex.im, e.g.:  

https://codexa-agent-production.up.railway.app/a2a/agent/codexa

yaml
Copy code

4. Verify that your agent is receiving and responding to messages.  
5. Check logs at: `https://api.telex.im/agent-logs/{channel-id}.txt`

---

## Notes

- Mastra dependencies must be installed before running the agent.  
- The agent currently echoes messages and provides simple summaries. You can extend it with AI-based replies, error handling, and additional modules.  
- Keep your code modular for easy expansion and new features.  
- Ensure your `package.json` scripts and ports are configured correctly for Railway.  

---

## Contribution

Feel free to fork, modify, and improve Codexa for your own Telex workflows.  
