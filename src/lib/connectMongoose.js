import mongoose from "mongoose";

export function connectMongooseDb() {
    mongoose.connect("mongodb://127.0.0.1:27017/audioBooksDatabase")
        .then(() => console.log("Connected to db"))
        .catch((err) => console.log("Error connecting db", err))
}