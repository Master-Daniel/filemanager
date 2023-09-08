const express = require("express");
const app = express();

app.use(session({
    secret: 'elitecodec',
    resave: true,
    saveUninitialized: true
}));

module.exports = app;