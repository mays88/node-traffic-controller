import express from "express";
import cors from "cors";
import { router as eventRouter } from "./routes/events.js";
export const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/events", eventRouter);

app.get("/ai", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:5000/ai-endpoint");
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error calling AI API");
    }
});

app.get("/blockchain", async (req, res) => {
    try {
        const response = await axios.get(
            "http://localhost:8080/blockchain-endpoint"
        );
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error calling Blockchain API");
    }
});
