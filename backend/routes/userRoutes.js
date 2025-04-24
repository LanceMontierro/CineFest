import express from "express";
import {
  saveUser,
  getAllUserDetails,
} from "./../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/saveUser", saveUser);
userRoutes.get("/get-user-details", getAllUserDetails);

export default userRoutes;
