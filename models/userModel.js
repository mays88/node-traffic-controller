import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A User must have a name"],
    },
    username: {
        type: String,
        required: [true, "A User must have a username"],
        unique: true,
    },
    email: { type: String, required: [true, "A User must have a email"] },
});

export const User = mongoose.model("User", userSchema);
