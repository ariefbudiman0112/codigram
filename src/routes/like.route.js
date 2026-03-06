const { LikeController } = require('../controllers/');
const { authentication } = require('../middleware/');

const likeRoute = require('express').Router();

likeRoute.get("/",(req,res) => {
    res.send({message:"Welcome to Like API"});
});

likeRoute.get('/all', LikeController.getAll);
// postRoute.put('/edit/:id', authentication, PostController.edit);
likeRoute.post('/create', authentication, LikeController.create);
likeRoute.get('/detail/:id', LikeController.getPostById);
// postRoute.delete('/delete/:id', authentication, authorizationPostOwner, PostController.delete);
// postRoute.put('/edit/:id', authentication, authorizationPostOwner, PostController.edit);
module.exports = likeRoute;