const { Schedule, Day, Time } = require('../models/models');
const ApiError = require('../errors/ApiError');

class ScheduleController {
  async makeRecord(req, res, next) {
    const { day, time, place, trainer, timeEnd } = req.body;
    const data = await Day.findOne({ where: { name: day } }).then((day) => {
      if (!day) {
        return next(ApiError.badRequest('День недели не найден'));
      }
      Time.findOne({ where: { time: time } }).then((time) => {
        if (!time) {
          return next(ApiError.badRequest('Время записи не существует'));
        }
        day.addTime(time, {
          through: { place: place, trainer: trainer, timeEnd: timeEnd },
        });
      });
    });
    return res.json('Запись прошла успешно');
  }

  async getRecord(req, res, next) {
    const days = await Day.findAll({ include: Time });
    if (!days) {
      return next(ApiError.internal('Не удалось найти расписание'));
    }
    return res.json({ days });
  }

  async deleteRecord(req, res, next) {
    const { id } = req.body;
    const data = await Schedule.destroy({ where: { id } });
    if (!data) {
      return next(ApiError.badRequest(`Запись с ` + id + ` не найдена`));
    }
    return res.json('Запись успешно удалена');
  }
}

module.exports = new ScheduleController();
