'use strict'
const mongoose = require('mongoose');
const crypto = require('crypto');

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hash: String,
    salt: String,
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
        default: Date.now,
    }
})

accountSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString('hex');
}

accountSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString('hex');
    return this.hash === hash;
}

const Account = module.exports = mongoose.model('Account', accountSchema);