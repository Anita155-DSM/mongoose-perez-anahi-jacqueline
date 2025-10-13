import { Router } from "express";
import { 
  enrollUserInCourse,
  unenrollUser
} from "../controllers/enrollment.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const enrollmentRoutes = Router();

// inscribir usuario en curso
enrollmentRoutes.post("/enrollments", authMiddleware, enrollUserInCourse);

// desinscribir usuario
enrollmentRoutes.delete("/enrollments/:enrollmentId", authMiddleware, unenrollUser);

export default enrollmentRoutes;