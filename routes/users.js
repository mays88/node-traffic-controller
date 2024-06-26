import express from "express";
import {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createUser,
} from "../controllers/userController.js";

export const router = express.Router();

// router.param("id", checkID);

//Routes
router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
