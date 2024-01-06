import express from "express";
import cors from "cors";
import gameRouter from "./routes/game";
import { verbose } from "sqlite3";

const app = express();
export const sqlite3 = verbose();

// global middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/", gameRouter);

export default app;
