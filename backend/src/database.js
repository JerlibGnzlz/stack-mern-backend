import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



mongoose.set('strictQuery', false);

mongoose.connect(`${process.env.URL_MONGO}`, (error) => {
    if (!error) {
        console.log(`'MongoDB Connected...`);

    } else {
        console.log(`Error de conexion a la base de datos`, error);
    }
});
