import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Types.ObjectId,
            ref: "Todo",
        },

        userId: {
            type: String,
            required: true,
            index: true,
        },
        title: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
