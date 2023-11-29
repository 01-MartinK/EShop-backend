const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    image_path: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    reviews: {
        type: Array,
        required: false,
    },
    stars: {
        type: Number,
        required: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model("Product", productSchema)