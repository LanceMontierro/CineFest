import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://192.168.1.5:8081" }));
connectDB();

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
