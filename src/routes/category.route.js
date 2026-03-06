const {CategoryController} = require('../controllers/');
const {authentication, authorizationAdminDelete} = require('../middleware/');

const categoryRoute = require('express').Router();

categoryRoute.get("/",(req,res) => {
    res.send({message:"Welcome to Category API"});
});

categoryRoute.get('/all', CategoryController.getAll);
categoryRoute.put('/edit', CategoryController.edit);
categoryRoute.get('/detail/:id', CategoryController.getCategoryById);
categoryRoute.post('/create', CategoryController.create);
categoryRoute.delete('/delete/:CategoryId', CategoryController.delete);

module.exports = categoryRoute;