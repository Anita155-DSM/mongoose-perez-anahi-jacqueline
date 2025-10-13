import { Router } from "express";
import { getAllProfiles, createProfile, updateProfile, deleteProfile, getProfileById } from "../controllers/profile.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const profileRoutes = Router();

profileRoutes.post("/profile", authMiddleware, createProfile);
profileRoutes.get("/profile", authMiddleware, getAllProfiles);
profileRoutes.get("/profile/:id", authMiddleware, getProfileById);
profileRoutes.put("/profile/:id", authMiddleware, updateProfile);
profileRoutes.delete("/profile/:id", authMiddleware, adminMiddleware, deleteProfile);

export default profileRoutes;
