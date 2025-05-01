import express from "express";
import {
  saveUser,
  getAllUserDetails,
  addToFavoriteMovies,
  addToRecentlyViewedMovies,
} from "./../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/saveUser", saveUser);
userRoutes.get("/get-user-details", getAllUserDetails);
userRoutes.post("/add-to-favorite-movies", addToFavoriteMovies);
userRoutes.post("/add-to-recently-viewed-movies", addToRecentlyViewedMovies);

export default userRoutes;
