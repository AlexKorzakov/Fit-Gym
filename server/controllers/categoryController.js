const {Category} = require('../models/models');
const ApiError = require('../errors/ApiError');

class CategoryController {
	
	async getAll(req, res) {
		const categories = await Category.findAll();
		return res.json(categories);
	};
}

module.exports = new CategoryController();