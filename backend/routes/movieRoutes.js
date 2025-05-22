import express from "express";
import {
  getMovies,
  createMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.post("/create-movie", createMovie);
movieRoutes.get("/get-movie", getMovies);
movieRoutes.delete("/delete-movie/:id", deleteMovie);

export default movieRoutes;
