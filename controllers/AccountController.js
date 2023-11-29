const accountService = require('../services/AccountService');
const crypt = require('../utils/crypt');

const getAccountById = async (req, res) => {
    try {
        const account = await accountService.findById(req.params.id);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

const getByEmail = async (req, res) => {
    try {
        const account = await accountService.findByEmail(req.body.email);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

const loginInstance = async (req, res) => {
    try {
        const account = await accountService.getLoginInstance(req.body.email, req.body.password);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

const updateAccount = async (req, res) => {
    try {
        const account = await accountService.updateAccount(req.body);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

const registerUser = async (req, res) => {
    const data = req.body;

    data.password = crypt.hashPassword(data.password);

    try {
        const account = await accountService.registerUser(data);
        res.status(200).json({data: account});
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    registerUser,
    loginInstance,
    getAccountById,
    getByEmail,
    updateAccount
}