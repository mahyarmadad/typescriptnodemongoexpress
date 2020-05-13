import * as mongoose from 'mongoose';
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todo", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
export default connectDB;
