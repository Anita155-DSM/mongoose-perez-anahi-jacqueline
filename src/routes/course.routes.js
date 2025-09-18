import { Router } from "express";
import { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourse} from "../controllers/course.controllers.js";

const courseRoutes = Router();

courseRoutes.post("/courses", createCourse);
courseRoutes.get("/courses", getAllCourse);
courseRoutes.get("/courses/:id", getCourseById);
courseRoutes.put("/courses/:id", updateCourse);
courseRoutes.delete("/courses/:id", deleteCourse);

export default courseRoutes