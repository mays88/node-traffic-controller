import mongoose from "mongoose";
import { type } from "os";

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
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
        type: {
            type: String,
        },
        ingredients: [{ measurement: String, name: String }],
        equipment: [String],
    },
    { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
