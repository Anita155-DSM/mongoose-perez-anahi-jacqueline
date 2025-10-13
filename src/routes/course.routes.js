import { Router } from "express";
import { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourse} from "../controllers/course.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const courseRoutes = Router();

courseRoutes.post("/courses", authMiddleware, createCourse);
courseRoutes.get("/courses", authMiddleware, getAllCourse);
courseRoutes.get("/courses/:id", authMiddleware, getCourseById);
courseRoutes.put("/courses/:id", authMiddleware, updateCourse);
courseRoutes.delete("/courses/:id", authMiddleware, adminMiddleware, deleteCourse);

export default courseRoutes