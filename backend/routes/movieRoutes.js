import express from "express";
import { getMovies, createMovie } from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.post("/create-movie", createMovie);
movieRoutes.get("/get-movie", getMovies);

export default movieRoutes;
