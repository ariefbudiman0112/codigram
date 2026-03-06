const authService = require('./auth.service');
const userService = require('./user.service'); 
const postService = require('./post.service');
const categoryService = require('./category.service');
const commentService = require('./comment.service');

module.exports = {
    AuthService: authService,
    UserService: userService,
    PostService: postService,
    CategoryService: categoryService,
    CommentService: commentService
};