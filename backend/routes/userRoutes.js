import express from "express";
import {
  saveUser,
  getAllUserDetails,
  addToFavoriteMovies,
  addToRecentlyViewedMovies,
  deleteAllFavoriteMovies,
  deleteAllRecentlyViewedMovies,
} from "./../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/saveUser", saveUser);
userRoutes.get("/get-user-details", getAllUserDetails);
userRoutes.post("/add-to-favorite-movies", addToFavoriteMovies);
userRoutes.post("/add-to-recently-viewed-movies", addToRecentlyViewedMovies);
userRoutes.post("/delete-all-favorite-movies", deleteAllFavoriteMovies);
userRoutes.post(
  "/delete-all-recently-viewed-movies",
  deleteAllRecentlyViewedMovies
);

export default userRoutes;
