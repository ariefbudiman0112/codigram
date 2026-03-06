const {UserController} = require('../controllers/');
const {authentication, authorizationAdminDelete} = require('../middleware/');

const userRoute = require('express').Router();

userRoute.get("/",(req,res) => {
    res.send({message:"Welcome to User API"});
});

userRoute.get('/all', UserController.getAll);
userRoute.put('/edit', authentication, UserController.edit);
userRoute.get('/account',authentication, UserController.getAccount);
userRoute.delete('/delete/:UserId', authentication, authorizationAdminDelete, UserController.delete);

module.exports = userRoute;