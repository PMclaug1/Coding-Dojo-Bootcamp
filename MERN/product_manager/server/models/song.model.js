const mongoose = require("mongoose")

// Create new DB collection/table
const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be at least 5 characters"]
    },
    artist: {
        type: String,
        required:[true, "Arist name required"],
        minlength: [1, "Arist name must have 1 character"]
    },
    rating: {
        type: Number,
        min: [1, "Rating must be greater than 0"],
        max: [10, "Maximum rating of 10"]
    },
    top100: {
        type: Boolean,
        required: [false]
    },
}, {timestamps: true})

module.exports = mongoose.model("Song", SongSchema)