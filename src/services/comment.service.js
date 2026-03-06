const {  Comment, Post, User} = require('../models/');

class CommentService {
    static async getAll() {
        try {
            const comments = await Comment.findAll({
                include: [
                    {   
                    model: User, 
                    attributes: ["id","username"],
                    },
                    {
                        model: Post, 
                        attributes: ["id","caption"],
                    },
            ],
            order:[["createdAt", "DESC"]],
            });
            return comments;
        } catch (error) {
            throw error;
        }
    }

    static async getCommentById(id) {
        try {
            const comment = await Comment.findByPk(id, {
                include: [
                    {
                        model:Post,
                        attributes: ["id", "caption"],
                    },
                ],
            });

            if(!comment){
                throw new Error("Comment not found");
            }

            return comment;
        } catch (error) {
            throw error;
        }
    }

    static async create(data, UserId) {
        try {
            const comment = await Comment.create(data);
            return comment;
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
        try{
            const comment = await Post.findByPk(id);
            if(!comment){
                throw new Error("Comment not found");
            }

            if(comment.UserId !== UserId){
                    throw new Error("Not your comment");
            }else{
                    await comment.destroy();

                    return{
                        message: "Comment deleted successfully",
                    }
            }
        }catch(err){
            throw err
        }  
    }
}
module.exports = CommentService;