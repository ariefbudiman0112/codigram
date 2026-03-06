const {  Post, Category, User} = require('../models/');

class PostService {
    static async getAll() {
        try {
            const posts = await Post.findAll({
                include: [Category, {   
                    model: User, 
                    attributes: {exclude: ['password']}
                }],
            });
            return posts;
        } catch (error) {
            throw error;
        }
    }

    static async getPostById(id) {
        try {
            const post = await Post.findByPk(id, {
                include: [Category, User],
            });
            return post;
        } catch (error) {
            throw error;
        }
    }

    static async create(data, UserId) {
        try {
            const { caption, imageUrl, CategoryId } = data;
            const post = await Post.create({
                caption,
                imageUrl,
                CategoryId: +CategoryId,
                UserId
            });
            return post;
        } catch (error) {
            throw error;
        }
    }

    static async edit(id, data) {
        const post = await Post.findByPk(id);
        if(!post){
            throw new Error("Post not found");
        }

        const result = await Post.update(data, {
            where: { id: +id }
        });
        if(result){
            return {message: "Post updated successfully"};
        }else{
            throw new Error("Failed to update post");
        }
    }

    static async delete(id) {
        const post = await Post.findByPk(id);
        if(!post){
            throw new Error("Post not found");
        }

        const result = await Post.destroy({
            where: { id: +id }
        });
        if(result){
            return {message: "Post deleted successfully"};
        }else{
            throw new Error("Failed to delete post");
        }
    }
}
module.exports = PostService;