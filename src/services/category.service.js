const { Category } = require('../models');

class CategoryService {
    static async getAll() {
        try {
            const categories = await Category.findAll();
            return categories;
        } catch (error) {
            throw error;
        }
    }

    static async getCategoryById(id) {
        try {
            const category = await Category.findByPk(id);
            return category;
        } catch (error) {
            throw error;
        }
    }

    static async create(data) {
        try {
            const category = await Category.create(data);
            return category;
        } catch (error) {
            throw error;
        }
    }

    static async edit(id, data) {
        try {
            const category = await Category.update(data, {
                where: { id }
            });
            return category;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const category = await Category.destroy({
                where: { id }
            });
            return category;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategoryService;