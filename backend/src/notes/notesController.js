const notesController = {};
import { NotesModel } from "./notesModels.js";

const getNotes = async (req, res) => {
    try {
        const note = await NotesModel.find();
        res.status(200).json({ msg: "Todas las notas", note });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};

const getNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await NotesModel.findById(id);
        res.status(200).json({ msg: "Obtener una nota con exito", note });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};

const createNote = async (req, res) => {
    try {
        const { title, content, autor, date } = req.body;
        const note = await NotesModel.create({
            title,
            content,
            autor,
            date
        });
        res.status(201).json({ msg: "Nota creada con exito", note });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, autor, content } = req.body;
        const note = await NotesModel.findOneAndUpdate({ _id: id }, {
            title,
            autor,
            content
        });
        res.status(200).json({ msg: "Nota actualizada con exito", note });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await NotesModel.findByIdAndRemove({ _id: id });
        res.json({ msg: "Nota eliminada con exito", note });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};

export { createNote, deleteNote, getNote, getNotes, updateNote }; 