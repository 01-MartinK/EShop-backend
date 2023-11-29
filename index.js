const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

console.clear()

const PORT = 3001

// App options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Database
mongoose.connect('mongodb://localhost/eshop');

mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

//Routes
const accountRouter = require('./routers/AccountRouter')
const productRouter = require('./routers/ProductRouter')

app.get('/', function (req, res) {
    res.send('Server working');
});

app.use('/account', accountRouter);
app.use('/product', productRouter);

const server = app.listen(PORT, () => {
    console.log(`\nServer running at ${"http://"+"localhost:"+PORT} \n`);
})

module.exports = { app }