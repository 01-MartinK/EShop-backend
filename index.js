const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const PORT = 3001

// App options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get('/', function (req, res) {
    res.send('Server working');
});

//Database
mongoose.connect('mongodb://localhost/eshop', {useNewUrlParser: true});

mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

const server = app.listen(PORT, () => {
    console.log(` \n Server running at ${"http://"+"localhost:"+PORT} \n`);
})

module.exports = { app }