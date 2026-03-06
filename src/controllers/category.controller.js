const { CategoryService } = require('../services');

class CategoryController {
    static async getAll(req, res) {
        try {
            const categories = await CategoryService.getAll();
            res.status(200).send(categories);
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async getCategoryById(req, res) {
        try {
            const id = +req.params.id;
            const category = await CategoryService.getCategoryById(id);
            if(category){
                return res.status(200).send(category);
            }else{
                return res.status(404).send({message: "Category not found"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async create(req, res) {
        try {
            const category = await CategoryService.create(req.body);
            res.status(201).send(category);
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const category = await CategoryService.edit(id, req.body);
            if(category[0] === 1){
                return res.status(200).send(category);
            }else{
                return res.status(404).send({message: "Category not found"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            const category = await CategoryService.delete(id);
            if(category === 1){
                return res.status(200).send({message: "Category deleted successfully"});
            }else{
                return res.status(404).send({message: "Category not found"});
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

}

module.exports = CategoryController;