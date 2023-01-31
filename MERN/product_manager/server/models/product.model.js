const mongoose = require("mongoose")

// Create new DB collection/table
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be at least 5 characters"]
    },
    price: {
        type: Number,
        min: [1, "Rating must be greater than 0"],
        max: [100, "Maximum rating of 100"]
    },
    description: {
        type: String,
        required:[true, "Description required"],
        minlength: [10, "Description must be at least 10 characters"]
    },

}, {timestamps: true})

module.exports = mongoose.model("Product", ProductSchema)