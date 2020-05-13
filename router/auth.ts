import { Router, Response } from "express";
const { check, validationResult } = require("express-validator");
import * as bcrypt from 'bcryptjs';
import * as jwt from "jsonwebtoken";
import User from "../db/User";
import auth from "../middle/Auth";
import Request from "../types/Request";
import payload from "../types/Payload";


const router: Router = Router();
// Get all User
router.get("/", auth, async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});
// Login user 
router.post("/", [check("email", "Please Enter a Valid Email").isEmail()], async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
        const matchpass = bcrypt.compareSync(password, user.password);
        if (!matchpass) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
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
