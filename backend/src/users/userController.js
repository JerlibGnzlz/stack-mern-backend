const userController = {};
import { UsersModel } from "./userModels.js";

const getUsers = async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).json({ msg: "Todas los usuarios", users });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};

const createUser = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await UsersModel.create({ username });
        res.status(201).json({ msg: "Creado con exito", user });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UsersModel.findByIdAndRemove(id);
        res.status(200).json({ msg: "Usuario eliminado con exito", user });
    } catch (error) {
        throw new Error({ msg: "Hubo un error", error });
    }
};




export { getUsers, createUser, deleteUser };
