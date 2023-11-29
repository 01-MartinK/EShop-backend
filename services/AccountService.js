const AccountModel = require('../models/account')

const findById = async (id) => {
    return await AccountModel.findById(id);
}

const findByEmail = async (email) => {
    return await AccountModel.find({email: email});
}

const getLoginInstance = async (email, password) => {
    return await AccountModel.findOne({email: email})
}

const updateAccount = async (data) => {
    return await AccountModel.findByIdAndUpdate(data.id, data.model);
}

const registerUser = async (data) => {
    let newAccount = new AccountModel();

    newAccount.name = data.name;
    newAccount.email = data.email;
    
    newAccount.setPassword(data.password);

    console.log(data);
    console.log(newAccount);

    return await newAccount.save();
}

module.exports = {
    registerUser,
    updateAccount,
    getLoginInstance,
    findByEmail,
    findById
}