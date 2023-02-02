const {Trainer} = require('../models/models');
const ApiError = require('../errors/ApiError');

class TrainerController {
	
	async getAll(req, res) {
		const {category_id} = req.body;
		const trainers = await Trainer.findAll({where: {category_id}});
		if(!trainers) {
			return next(ApiError.internal('Error'));
		}
		return res.json(trainers);
	};	
}

module.exports = new TrainerController();