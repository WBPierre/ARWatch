const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const app = express();


const hostname = "127.0.0.1";
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;


var mongodb = 'mongodb+srv://WBPierre:<password>@watcher-13drk.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userRoutes = require('./routes/userRoutes');

userRoutes(app);


app.listen(port, hostname);