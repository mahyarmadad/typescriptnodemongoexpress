import { Schema, Model, model } from "mongoose";
const todoSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    task: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Todo: Model = model("tasks", todoSchema);
export default Todo;