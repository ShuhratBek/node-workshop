const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bluebird = require('bluebird');
const config = require('./config');
const routes = require('./routes');

const app = express();

mongoose.Promise = bluebird;

mongoose.connect(config.mongo.url);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use(express.static('views'));

app.use('/', routes);

app.listen(config.server.port, () => {
  console.log(`Listening port ${config.server.port}`);
});

module.exports = app;
