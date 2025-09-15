import { Router } from "express";
import { createUser, getAllUser, getUserById, deleteUser, updateUser } from "../controllers/user.controllers.js";


const userRoutes = Router();

userRoutes.post("/users", createUser);
userRoutes.get("/users", getAllUser);
userRoutes.get("/users/:id", getUserById);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);

export default userRoutes;
