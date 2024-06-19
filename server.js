import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";

import axios from "axios";

dotenv.config();

const DB = process.env.ATLAS_URI.replace("<PASSWORD>", process.env.PASSWORD);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 5173;

app.listen(port, () => {
    console.log(`Node.js API listening at http://localhost:${port}`);
});
