import express from "express";
import bodyParser from "body-parser";
import a2aRouter from "./routes/a2a.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/a2a", a2aRouter);

app.get("/", (req, res) => res.send("Codexa-Agent is live!"));

app.listen(PORT, () => console.log(`Codexa-Agent running on port ${PORT}`));
