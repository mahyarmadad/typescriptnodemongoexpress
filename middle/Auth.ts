import * as jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import payload from "../types/Payload";
import Request from "../types/Request";
export default function (req: Request, res: Response, next: NextFunction) {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).json({ msg: "No token , Authorization Failed!" });
    }
    try {
        const decoded: payload | any = jwt.verify(token, process.env.JWTSECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}