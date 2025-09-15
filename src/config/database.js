//para este TP no vamos a necesitar variables de entorno
//pero en proyectos mas grandes es una buena practica usarlas
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoose_bd");
    console.log("base de datos conectada correctamente");
    //para borrar base de datos hacemos lo siguiente demostrado en clase
    //await mongoose.connection.db.dropDatabase();
  } catch (error) {
    console.error("error al conectarse a la base de datos", error);
  }
};
