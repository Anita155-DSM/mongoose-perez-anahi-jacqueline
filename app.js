import express from 'express';
//import mongoose from 'mongoose';
import { connectDB } from './src/config/database.js';
import { routes } from './src/routes/index.routes.js';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = 3000;

app.use(cookieParser)
app.use(express.json());

app.use( '/api', routes);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`servidor corriendo en el puerto ${PORT}`);
});
