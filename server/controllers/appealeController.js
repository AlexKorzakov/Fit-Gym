const { Appeale } = require('../models/models');
const ApiError = require('../errors/ApiError');

class AppealeController {
  async makeAppeale(req, res, next) {
    const { name, description, phone } = req.body;
    if (!name || !description || !phone) {
      return next(ApiError.badRequest('Некорректно составлено обращение!'));
    }
    const create = await Appeale.create({ name, description, phone });
    return res.json('Обращение принято. Менеджер с вами свяжется');
  }

  async getAll(req, res) {
    const appeals = await Appeale.findAll();
    return res.json(appeals);
  }

  async deleteAppeale(req, res, next) {
    const { id } = req.body;
    const appeale = await Appeale.findOne({ where: { id } });
    if (!appeale) {
      return next(ApiError.badRequest('Такого обращения не существует'));
    }
    const deleteAppeale = await Appeale.destroy({ where: { id } });
    return res.json('Обращение успешно удалено');
  }
}

module.exports = new AppealeController();
