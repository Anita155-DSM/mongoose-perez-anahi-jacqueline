import express from 'express';
//import mongoose from 'mongoose';
import { connectDB } from './src/config/database.js';
import { routes } from './src/routes/index.routes.js';
import { UserModel } from './src/models/user.models.js';
import { ProfileModel } from './src/models/profile.models.js';
import { categoryModel } from './src/models/category.models.js';
import { CourseModel } from './src/models/course.models.js';


const app = express();
const PORT = 3000;

app.use(express.json());

app.use( '/api', routes);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`servidor corriendo en el puerto ${PORT}`);
});
