const accountService = require('../services/AccountService');
const crypt = require('../utils/crypt');

const getAccountById = async (req, res) => {
    try {
        const account = await accountService.findById(req.params.id);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(404).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const getByEmail = async (req, res) => {
    try {
        const account = await accountService.findByEmail(req.body.email);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(404).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const loginInstance = async (req, res) => {
    try {
        const account = await accountService.getLoginInstance(req.body.email, req.body.password);
        if (account.validPassword(req.body.password))
            return res.status(201).json({ data: account })
        else
            return res.status(400).json({ error: "Wrong Credentials" })
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const updateAccount = async (req, res) => {
    try {
        const account = await accountService.updateAccount(req.body);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const registerUser = async (req, res) => {
    const data = req.body;

    try {
        const account = await accountService.registerUser(data);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

module.exports = {
    registerUser,
    loginInstance,
    getAccountById,
    getByEmail,
    updateAccount
}