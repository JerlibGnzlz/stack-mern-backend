import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Configuración de Mongoose
mongoose.set("strictQuery", false);

// Conexión a la base de datos
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.URL_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error de conexión a la base de datos: ${error.message}`);
        process.exit(1); // Finaliza el proceso si no se puede conectar
    }
};

connectDB();
