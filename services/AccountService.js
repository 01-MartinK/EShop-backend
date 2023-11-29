const AccountModel = require('../models/account')

exports.findById = async (id) => {
    return await AccountModel.findById(id);
}

exports.findByEmail = async (email) => {
    return await AccountModel.find({email: email});
}

exports.getLoginInstance = async (email, password) => {
    return await AccountModel.find({email: email, password: password});
}

exports.updateAccount = async (data) => {
    return await AccountModel.findByIdAndUpdate(data.id, data.model);
}

exports.registerUser = async (data) => {
    return await AccountModel.create(data);
}