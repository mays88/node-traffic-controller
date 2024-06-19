import { Todo } from "../models/todoModel.js";

export const getTodos = async (req, res) => {
    try {
        const response = await Todo.find();

        res.status(200).json({
            status: "Success",
            results: response.length,
            data: {
                todos: response,
            },
        });
    } catch (error) {
        console.error(error);
    }
};

export const getTodo = async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);

    res.status(200).json({
        status: "Success",
        data: {
            todo,
        },
    });
};

export const createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                todo: newTodo,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error,
        });
    }
};

export const updateTodo = async (req, res) => {
    const updTodo = await Todo.updateOne(req.body);
    res.status(200).json({
        status: "Success",
        data: {
            todo: updTodo,
        },
    });
};

export const deleteTodo = async (req, res) => {
    await Todo.deleteOne();

    res.status(204).json({
        status: "Success",
        data: null,
    });
};
