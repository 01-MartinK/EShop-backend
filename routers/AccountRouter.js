const express = require('express');

const accountController = require('../controllers/AccountController');

const router = express.Router();

router.get('/:id', accountController.getAccountById);
router.get('/login', accountController.loginInstance);
router.post('/register', accountController.registerUser);
router.patch('/update', accountController.updateAccount);

module.exports = router;