const authController = require('./auth.controller');
const userController = require('./user.controller');
const postController = require('./post.controller');
const categoryController = require('./category.controller');
const commentController = require('./comment.controller');

module.exports = {
    AuthController: authController,
    UserController: userController,
    PostController: postController,
    CategoryController: categoryController,
    CommentController: commentController
};