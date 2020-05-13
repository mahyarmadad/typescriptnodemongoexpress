import { Request } from "express";
import payload from "./Payload";
type request = Request & payload;
export default request;
