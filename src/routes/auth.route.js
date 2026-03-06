const {AuthController} = require('../controllers/');

const authRoute = require('express').Router();

authRoute.get("/",(req,res) => {
    res.send({message:"Welcome to Auth API"});
});

authRoute.post('/login', AuthController.login);
authRoute.post('/register', AuthController.register);

module.exports = authRoute;