import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import userRoutes from "./users/usersRoutes.js";
import notesRoutes from "./notes/notesRoutes.js";
import "./database.js";


const app = express();

// ─── Middlewares ──────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api/users', userRoutes);
app.use('/api/notes', notesRoutes);


const port = process.env.PORT || 3003;


app.listen(port, () => {
    console.log(`listen on Port http://localhost:${port}`);
});




