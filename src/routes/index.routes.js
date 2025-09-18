//aca voy a importar todas las rutas como vimos en clases
import { Router } from "express";
import userRoutes from "./user.routes.js";
import profileRoutes from "./profile.routes.js";
import categoryRoutes from "./category.routes.js";
import courseRoutes from "./course.routes.js";

export const routes = Router();

routes.use(userRoutes);
routes.use(profileRoutes);
routes.use(categoryRoutes);
routes.use(courseRoutes);
