const { CommentService } = require('../services/');

class CommentController {
    static async getAll(req, res) {
        try {
            const posts = await CommentService.getAll();   
            res.status(200).send(posts);
        } catch (error) {   
            res.status(500).send({message:error.message});
        }
    } 
    
    static async getCommentById(req, res) {
        try {
            const post = await CommentService.getCommentById(req.params.id);
            if(post){
                return res.status(200).send(post);
            }else{
                return res.status(404).send({message: "Comment not found"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async create(req, res) {
        try {
            const userId = req.userData.id;
            const post = await CommentService.create({...req.body, UserId: userId});
            res.status(201).send({message: "Comment created successfully", data: post});

        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;  


            const post = await CommentService.edit(id, req.body);
            if(post){
                return res.status(200).send(post);
            }else{
                return res.status(404).send({message: "Comment not found or you are not the owner"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            
            const post = await CommentService.delete(id);
            if(post){
                return res.status(200).send(post);
            }else{
                return res.status(404).send({message: "Comment not found or you are not the owner"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
}

module.exports = CommentController;