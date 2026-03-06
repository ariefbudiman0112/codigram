const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const postRoute = require('./post.route');
const categoryRoute = require('./category.route');
const commentRoute = require('./comment.route');
// const likeRoute = require('./like.route');

const route = require('express').Router();

route.get('/', (req, res) => {
    res.send({message:"Welcome to Codigram API"});
});

route.use('/auth',authRoute);
route.use('/users',userRoute);
route.use('/posts',postRoute);
route.use('/categories',categoryRoute);
route.use('/comments',commentRoute);
// route.use('/likes',categoryRoute);

module.exports = route;