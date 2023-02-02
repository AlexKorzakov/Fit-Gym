const { default: next } = require('next');
const bcrypt = require('bcrypt');
const ApiError = require('../errors/ApiError');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');
const { Op } = require('sequelize');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  // GUEST Functions

  async registration(req, res, next) {
    const { name, date, email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный Email или Пароль'));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest('Пользователь с таким Email уже существует')
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      date,
      email,
      role,
      password: hashPassword,
    });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }

  // USER Functions

  async getOne(req, res, next) {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    const id = user.id;
    const name = user.name;
    const date = user.date;
    const type = user.type;
    const remained = user.remained;
    const trainer = user.trainer;
    return res.json({ id, name, date, type, remained, trainer });
  }

  async changePassword(req, res, next) {
    const { email, password } = req.body;
    const newPassword = await bcrypt.hash(password, 5);
    const candidate = await User.findOne({ where: { email } });
    if (!candidate) {
      return next(ApiError.badRequest('Пользователь не найден'));
    }
    const user = await User.update(
      { password: newPassword },
      { where: { email: email } }
    );
    return res.json(`Пароль успешно изменен на: ` + password);
  }

  // ADMIN Functions

  async getAll(req, res, next) {
    const { name } = req.params;
    const users = await User.findAll({
      where: { name: { [Op.like]: `%` + name + `%` } },
    });
    return res.json(users);
  }

  async extendVisit(req, res, next) {
    const { id, newRemained } = req.body;
    const user = await User.update(
      { remained: newRemained },
      { where: { id } }
    );
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    return res.json('Количество посещений изменено на: ' + newRemained);
  }

  async offVisit(req, res, next) {
    const { id, remained } = req.body;
    const user = await User.update(
      { remained: remained - 1 },
      { where: { id } }
    );
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    return res.json('Вы успешно списали одно занятие');
  }

  async getPersonalTrainer(req, res, next) {
    const { id, newTrainer } = req.body;
    const user = await User.update({ trainer: newTrainer }, { where: { id } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    return res.json('Персональный тренер назначен: ' + newTrainer);
  }

  async deleteUser(req, res, next) {
    const { id } = req.body;
    const user = await User.destroy({ where: { id } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    return res.json('Клиент удален');
  }

  async changeName(req, res, next) {
    const { id, newName } = req.body;
    const user = await User.update({ name: newName }, { where: { id } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    return res.json('Имя успешно изменено на: ' + newName);
  }

  async changeDayOfBirthday(req, res, next) {
    const { id, newDate } = req.body;
    const user = await User.update({ date: newDate }, { where: { id } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    return res.json('Дата рождения изменена на: ' + newDate);
  }

  async changeType(req, res, next) {
    const { id, newType } = req.body;
    const user = await User.update({ type: newType }, { where: { id } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    return res.json('Тип абонемента изменен на: ' + newType);
  }
}

module.exports = new UserController();
