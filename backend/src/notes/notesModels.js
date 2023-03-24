import mongoose from 'mongoose';


const notesSchema = new mongoose.Schema(
    {
        title: String
        ,
        content: {
            type: String,
            required: "Debe ingresar un contenido"
        },
        autor: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true,
        versionKey: false
    });




export const NotesModel = mongoose.model("note", notesSchema);