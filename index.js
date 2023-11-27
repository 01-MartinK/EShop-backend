const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const PORT = 3001

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const server = app.listen(PORT, () => {
    console.log(`Server running at ${"http://"+"localhost:"+PORT}`);
})

module.exports = { app }