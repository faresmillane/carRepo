const express = require('express');
const carRouter = require('./routes/carRouter');
const morgan = require('morgan');
var bodyParser = require('body-parser');

const PORT = process.env.PORT  || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/carDB';
const app = express();

var mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, 
{ 
    useUnifiedTopology: true,  
    useNewUrlParser: true}, 
    (err) => {
    if (!err){
        console.log('connected to DB!');
    } else {
        console.log("error");
    }
    //var car = new require('./models/carModel')();
    //car.save();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use( carRouter);
app.listen(PORT, () => console.log(`server is running in ${PORT}`));

module.exports = app;