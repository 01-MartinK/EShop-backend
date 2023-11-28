const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

const models = require('../models')

const getProductList = (req, res) => {
        let amount = req.body.amount;
        models.Product.findAll({
            limit: amount
        })
        .then(products => {
            console.log(products);
            return res.status(200).json({ products });
        })
        .catch(error => {
            return res.status(500).send(error.message);
        })
}

const getProductById = (req, res) => {
        let id = req.body.id;
        models.Product.findByPk(id)
        .then(product => {
            console.log(product)
		    return res.status(200).json({ product });
        })
        .catch (error => {
            return res.status(500).send(error.message);
        })
}

module.exports = {
    getProductList,
    getProductById
}