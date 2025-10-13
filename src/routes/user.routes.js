import { Router } from "express";
import { getAllUser, getUserById, deleteUser, updateUser } from "../controllers/user.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const userRoutes = Router();

userRoutes.get("/users", authMiddleware, getAllUser);
userRoutes.get("/users/:id", authMiddleware, getUserById);
userRoutes.put("/users/:id", authMiddleware, updateUser);
userRoutes.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);

export default userRoutes;
