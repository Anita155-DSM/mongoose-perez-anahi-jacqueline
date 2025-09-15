import { createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory} from "../controllers/category.controllers.js";
import { Router } from "express";

const categoryRoutes = Router();
categoryRoutes.post("/category", createCategory);
categoryRoutes.get("/category", getAllCategory);
categoryRoutes.get("/category/:id", getCategoryById);
categoryRoutes.put("/category/:id", updateCategory);
categoryRoutes.delete("/category/:id", deleteCategory);

export default categoryRoutes;
