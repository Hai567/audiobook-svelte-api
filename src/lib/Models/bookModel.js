import mongoose from "mongoose";
let Schema = mongoose.Schema;

let audioBooksSchema = Schema({
    title: String,
    author: String,
    narrator: String,
    cover: {
        url: String,
        dominantColor: String,
    },
    description: String,
    rating: String,
    audioList: Array,
    isFull: Boolean,
}, { timestamps: true });


export let audioBooks = mongoose.model("audioBooks", audioBooksSchema);