const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../models')

const registerUser = (req, res) => {
    const data = req.body.data
    
    const newUser = models.User.create({

    })
    .then(user => {
        console.log(user);
        return res.status(200).json({message: "You have registered"})
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
}

const getUser = (req, res) => {
    const id = req.body.id
    models.Product.findByPk(id)
    .then(products => {
        console.log(products);
        return res.status(200).json({ products });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    })
}