const { CommentController } = require('../controllers/');
const {authentication, authorizationPostOwner} = require('../middleware/');

const commentRoute = require('express').Router();

commentRoute.get("/",(req,res) => {
    res.send({message:"Welcome to Comment API"});
});

commentRoute.get('/all', CommentController.getAll);
// commentRoute.put('/edit/:id', authentication, CommentController.edit);
commentRoute.post('/create', authentication, CommentController.create);
commentRoute.get('/detail/:id', CommentController.getCommentById);
commentRoute.delete('/delete/:id', authentication, authorizationPostOwner, CommentController.delete);
module.exports = commentRoute;