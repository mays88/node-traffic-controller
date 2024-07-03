import { Event } from "../models/eventModel.js";

export const getEvents = async (req, res) => {
    try {
        const response = await Event.find();

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

export const getEvent = async (req, res) => {
    const id = req.params.id;
    const event = await Event.findById(id);

    res.status(200).json({
        status: "Success",
        data: {
            event,
        },
    });
};

export const createEvent = async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);

        res.status(201).json({
            status: "Success",
            data: {
                event: newEvent,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error,
        });
    }
};

export const updateEvent = async (req, res) => {
    const id = req.params.id;
    const updEvent = await Event.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json({
        status: "Success",
        data: {
            event: updEvent,
        },
    });
};

export const deleteEvent = async (req, res) => {
    await Event.deleteOne();

    res.status(204).json({
        status: "Success",
        data: null,
    });
};
