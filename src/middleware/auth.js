const { verifyToken } = require('../helpers/jwt');
const { Post } = require('../models/');

const authentication = (req, res, next) => {
    try{
        console.log('Auth middleware called');
        const {access_token} = req.headers;
        const userVerified = verifyToken(access_token);
        req.userData = userVerified;
        next();
    }catch(error) {
        res.status(401).json({ message: 'Unauthorized', error });
    }
};

const authorizationAdminDelete = async (req, res, next) => {
    try{
        const id = +req.params.UserId;
        const user = req.userData;

        if (user.id === id) {
            return res.status(403).json({ message: 'Forbidden: cannot delete your own account' });
        }

         if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Admins only' });
        }else {
            next();
        }
        
    }catch(error) {
        next(error);
    }
};

const authorizationPostOwner = async (req, res, next) => {
    try{
        const postId = +req.params.id;
        const userId = +req.userData.id;

        const post = await Post.findByPk(postId);

        if(!post){
            return res.status(404).json({
                message:"Post not found",
            })
        }

        if (post.UserId !== userId) {
            return res.status(403).json({ message: 'Forbidden: You are not the owner of this post' });
        }else {
            next();
        }   
    }catch(error) {
        next(error);
    }
};

module.exports = {authentication, authorizationAdminDelete, authorizationPostOwner};