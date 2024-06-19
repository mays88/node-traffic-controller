import { User } from "../models/userModel.js";

export const getUsers = (req, res) => {
    // let filteredUsers = users;
    // if (req.query.email) {
    //     const email = req.query.email;
    //     filteredUsers = filteredUsers.filter((user) => user.email === email);
    // }
    // if (req.query.username) {
    //     const username = req.query.username;
    //     filteredUsers = filteredUsers.filter(
    //         (user) => user.username === username
    //     );
    // }
    // res.status(200).json({
    //     status: "Success",
    //     results: users.length,
    //     data: {
    //         users: filteredUsers,
    //     },
    // });
};

export const getUser = (req, res) => {
    // const id = parseInt(req.params.id);
    // const user = users.find((user) => user.id === id);
    // res.status(200).json({
    //     status: "Success",
    //     data: {
    //         user,
    //     },
    // });
};

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                user: newUser,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error,
        });
    }
};

export const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    res.status(200).json({
        status: "Success",
        data: {
            user: req.body,
        },
    });
};

export const deleteUser = (req, res) => {
    res.status(204).json({
        status: "Success",
        data: null,
    });
};
