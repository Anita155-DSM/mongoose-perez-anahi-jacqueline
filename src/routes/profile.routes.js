import { Router } from "express";
import { getAllProfiles, createProfile, updateProfile, deleteProfile, getProfileById } from "../controllers/profile.controllers.js";

const profileRoutes = Router();

profileRoutes.post("/profile", createProfile);
profileRoutes.get("/profile", getAllProfiles);
profileRoutes.get("/profile/:id", getProfileById);
profileRoutes.put("/profile/:id", updateProfile);
profileRoutes.delete("/profile/:id", deleteProfile);

export default profileRoutes;
