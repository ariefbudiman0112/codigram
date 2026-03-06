const {PostController} = require('../controllers/');
const {authentication, authorizationPostOwner} = require('../middleware/');
const { post } = require('./user.route');

const postRoute = require('express').Router();

postRoute.get("/",(req,res) => {
    res.send({message:"Welcome to Post API"});
});

postRoute.get('/all', PostController.getAll);
// postRoute.put('/edit/:id', authentication, PostController.edit);
postRoute.post('/create', authentication, PostController.create);
postRoute.get('/detail/:id', PostController.getPostById);
postRoute.delete('/delete/:id', authentication, authorizationPostOwner, PostController.delete);
postRoute.put('/edit/:id', authentication, authorizationPostOwner, PostController.edit);
module.exports = postRoute;