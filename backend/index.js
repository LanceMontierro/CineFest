import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.use("/users", userRoutes);
app.use("/movies", movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
