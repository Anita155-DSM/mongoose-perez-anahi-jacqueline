import { register, login, logout, getProfile } from "../controllers/auth.controllers.js";
import { Router } from "express";

const authRoutes = Router();

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/logout', logout)
authRoutes.get('/profile/:profileId', getProfile)

export default authRoutes