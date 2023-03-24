import { Router } from "express";
import { createUser, getUsers, deleteUser } from "./userController.js";


const router = Router();

router.get("/", getUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);


export default router;