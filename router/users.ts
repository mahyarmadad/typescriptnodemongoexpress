import { Router, Response } from "express";
const { check, validationResult } = require("express-validator");
import * as bcrypt from 'bcryptjs';
import * as jwt from "jsonwebtoken";
import User from "../db/User";
import payload from "../types/Payload";
import Request from "../types/Request";

const router: Router = Router();
// Register User 
router.post("/", [check("email", "Please Enter a Valid Email").isEmail()], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ $or: [{ email }, { username }] });
        if (user) {
            return res.status(400).json({ msg: "User already exist" });
        }
        user = new User({ username, email, password });
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);
        user.save();
        const userId: payload = { userId: user.id };
        jwt.sign(userId, process.env.JWTSECRET, { expiresIn: "1h" }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});
export default router;
