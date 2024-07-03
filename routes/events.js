import express from "express";
// import { error } from "../utilities/error.js";
import {
    getEvent,
    updateEvent,
    deleteEvent,
    createEvent,
    getEvents,
    // checkID,
} from "../controllers/eventController.js";

export const router = express.Router();

// router.param("id", checkID);

router.route("/").post(createEvent).get(getEvents);
router.route("/:id").get(getEvent).patch(updateEvent).delete(deleteEvent);
