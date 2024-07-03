import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Types.ObjectId,
            ref: "Event",
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

export const Event = mongoose.model("Event", eventSchema);
