import { createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory} from "../controllers/category.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const categoryRoutes = Router();
categoryRoutes.post("/category", authMiddleware, createCategory);
categoryRoutes.get("/category", authMiddleware, getAllCategory);
categoryRoutes.get("/category/:id", authMiddleware, getCategoryById);
categoryRoutes.put("/category/:id", authMiddleware, updateCategory);
categoryRoutes.delete("/category/:id", authMiddleware, adminMiddleware, deleteCategory);

export default categoryRoutes;
