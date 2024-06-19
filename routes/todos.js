import express from "express";
// import { error } from "../utilities/error.js";
import {
    getTodo,
    updateTodo,
    deleteTodo,
    createTodo,
    getTodos,
    // checkID,
} from "../controllers/todoController.js";

export const router = express.Router();

// router.param("id", checkID);

router.route("/").post(createTodo).get(getTodos);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);
