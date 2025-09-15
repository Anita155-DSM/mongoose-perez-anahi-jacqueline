//aca voy a importar todas las rutas como vimos en clases
import { Router } from "express";
import userRoutes from "./user.routes.js";

export const routes = Router();

routes.use(userRoutes);