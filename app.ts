require('dotenv').config();
import * as express from "express";
import auth from "./router/auth";
import todo from "./router/todo";
import users from "./router/users";
import connectDB from "./db/connect";
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/users", users);
app.use("/api/todo", todo);
app.use("/api/auth", auth);

app.listen(port, () => console.log(`Server is running on ${port}`));


