const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({message:"Welcome to Codigram API"});
});

module.exports = app;