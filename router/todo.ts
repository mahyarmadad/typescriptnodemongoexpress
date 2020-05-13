import { Router, Response } from "express";
const { check, validationResult } = require("express-validator");
import User from "../db/User";
import Todo from "../db/Todo";
import auth from "../middle/Auth";
import Request from "../types/Request";
const router: Router = Router();

// Get Task
router.get("/", auth, async (req: Request, res: Response) => {
    try {
        const task = await Todo.find({ user: req.userId }).sort({ date: -1 });
        res.json(task);
    } catch (error) {
        console.log(error.message);
        res.status(401).send("Server Error");
    }
});

// Create task
router.post("/", [auth, check("task", "Please Enter a task").not().isEmpty()], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const task = req.body.task;
    try {
        let todo = await Todo.findOne({ task });
        if (todo) {
            return res.status(400).json({ msg: "That Task already exist" });
        }
        todo = new Todo({ task, user: req.userId });
        todo.save();
        res.json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(401).send("Server Error");
    }
    res.send();
});
// Update Task 
router.put("/:id", auth, async (req: Request, res: Response) => {
    const task = req.body.task;
    try {
        let todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(400).json({ msg: "Task dose not exist" });
        if (todo.user.toString() !== req.userId) return res.status(401).json({ msg: "Not Authorized" });
        todo = await Todo.findByIdAndUpdate(req.params.id, { $set: { task } }, { new: true });
        res.json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(401).send("Server Error");
    }
});
// Delete Task
router.delete("/:id", auth, async (req: Request, res: Response) => {
    try {
        let todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(400).json({ msg: "Task dose not exist" });
        if (todo.user.toString() !== req.userId) return res.status(401).json({ msg: "Not Authorized" });
        todo = await Todo.findByIdAndRemove(req.params.id);
        res.status(200).json({ msg: "Task Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(401).send("Server Error");
    }
});


export default router;
