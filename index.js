const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const PORT = 3001

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    })

const server = app.listen(PORT, () => {
    console.log(`Server running at ${"http://"+"localhost:"+PORT}`);
})

module.exports = { app }