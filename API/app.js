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


var mongodb = 'mongodb+srv://default:default@watcher-13drk.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser: true, useFindAndModify: false});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const userAddressRoutes = require('./routes/userAddressRoutes');
const sizeRoutes = require('./routes/sizeRoutes');
const tagRoutes = require('./routes/tagRoutes');


userRoutes(app);
productRoutes(app);
userAddressRoutes(app);
sizeRoutes(app);
tagRoutes(app);


app.listen(port, hostname);
