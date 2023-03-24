import { Router } from "express";
import { getNotes, getNote, updateNote, createNote, deleteNote } from "./notesController.js";

const router = Router();

router.get("/", getNotes);

router.get("/:id", getNote);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);



export default router;