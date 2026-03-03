const authRoute = require('./auth.route');

const route = require('express').Router();

route.get('/', (req, res) => {
    res.send({message:"Welcome to Codigram API"});
});
route.use('/auth', require('./auth.route'));
route.use('/auth',authRoute);

module.exports = route; 