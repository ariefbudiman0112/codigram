const route = require('express').Router();

route.get('/', (req, res) => {
    res.send({message:"Welcome to Codigram API"});
});

module.exports = route; 