import { Router } from "express";
import { createUser } from "../controllers/user.controllers.js";


const userRoutes = Router();

userRoutes.post("/users", createUser);

export default userRoutes;
