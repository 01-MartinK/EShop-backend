const AccountModel = require('../models/account')

const findById = async (id) => {
    return await AccountModel.findById(id);
}

const findByEmail = async (email) => {
    return await AccountModel.find({email: email});
}

const getLoginInstance = async (email, password) => {
    return await AccountModel.find({email: email, password: password});
}

const updateAccount = async (data) => {
    return await AccountModel.findByIdAndUpdate(data.id, data.model);
}

const registerUser = async (data) => {
    return await AccountModel.create(data);
}

module.exports = {
    registerUser,
    updateAccount,
    getLoginInstance,
    findByEmail,
    findById
}