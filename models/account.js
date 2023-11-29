'use strict'
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: false,
    },
    wishlist: {
        type: Array,
        required: false,
    },
    productList: {
        type: Array,
        required: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('Account', accountSchema);