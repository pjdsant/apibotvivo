const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//Rotas
const index = require('./routes/index');
const botRoute = require('./routes/botRoute');
const messageRoute = require('./routes/messageRoute');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', index);
app.use('/bot', botRoute);
app.use('/message', messageRoute);

module.exports = app;