const { PostService } = require('../services/');

class PostController {
    static async getAll(req, res) {
        try {
            const posts = await PostService.getAll();   
            res.status(200).send(posts);
        } catch (error) {   
            res.status(500).send({message:error.message});
        }
    } 
    
    static async getPostById(req, res) {
        try {
            const post = await PostService.getPostById(req.params.id);
            if(post){
                return res.status(200).send(post);
            }else{
                return res.status(404).send({message: "Post not found"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async create(req, res) {
        try {
            const user = req.userData;
            if(user){
                const post = await PostService.create(req.body, user.id);
                res.status(201).send(post);
            }else{
                res.status(401).send({message: "Unauthorized"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;  


            const post = await PostService.edit(id, req.body);
            if(post){
                return res.status(200).send(post);
            }else{
                return res.status(404).send({message: "Post not found or you are not the owner"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            
            const post = await PostService.delete(id);
            if(post){
                return res.status(200).send(post);
            }else{
                return res.status(404).send({message: "Post not found or you are not the owner"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
}

module.exports = PostController;