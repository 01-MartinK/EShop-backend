'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        
    }
    Product.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        stars: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        products_sold: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Product;
}