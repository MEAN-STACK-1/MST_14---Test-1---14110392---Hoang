const express = require('express');
const app = express();

app.listen(3000,function(){
    console.log("connect succses");
});
const mongoose = require('mongoose');
const User = require('./api/model/MyModel');
const bodyParser = require('body-parser');

//
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/User'); 
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
const routes = require('./api/routes/MyRoutes'); 
routes(app); 




