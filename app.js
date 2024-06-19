import express from "express";
import { router as todoRouter } from "./routes/todos.js";
export const app = express();

app.use(express.json());

app.use("/api/v1/todos", todoRouter);

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
