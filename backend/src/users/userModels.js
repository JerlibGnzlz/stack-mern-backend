import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: "debe agregar un nombre",
            trim: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);





export const UsersModel = mongoose.model("user", userSchema);