import express from "express";
import { saveUser } from "./../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/saveUser", saveUser);

export default userRoutes;
