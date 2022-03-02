const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { User } = require('../db/models');
const UserDto = require('../dtos/userDtos');

class UserController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({ message: 'ошибка при регистрации', errors });
      }
      const { login, email, password } = req.body;
      const candidateName = await User.findOne({ where: { login } });
      const candidateEmail = await User.findOne({ where: { email } });

      if (candidateName) {
        return res.json({
          message: 'пользователь с таким логином уже существует',
        });
      }

      if (candidateEmail) {
        return res.json({
          message: 'пользователь с такой почтой уже существует',
        });
      }

      const hashPassword = await bcrypt.hash(password, 7);

      const newUser = await User.create({
        login,
        email,
        password: hashPassword,
      });
      const userDto = new UserDto(newUser);
      req.session.user = { id: userDto.id, login: userDto.login };

      return res.json({ message: 'Регистрация прошла успешно', user: userDto });
    } catch (error) {
      return res.json({
        message: 'Регистрация прошла не удачно, попробуйте позже',
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.json({ message: 'пользователь не найден' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.json({ message: 'введен неверный пароль' });
      }

      const userDto = new UserDto(user);
      req.session.user = { id: userDto.id, login: userDto.login };

      return res.json({ message: 'авторизация прошла успешно', user: userDto });
    } catch (error) {
      return res.json(error);
    }
  }

  async logout(req, res) {
    try {
      req.session.destroy();
      res.clearCookie('sid');
      return res.sendStatus(200);
    } catch (error) {
      return res.json(error);
    }
  }

  async authMe(req, res) {
    try {
      if (req.session.user) {
        const userCheckData = await User.findOne({
          where: { id: req.session.user.id },
          raw: true,
        });
        const userDto = new UserDto(userCheckData);
        req.session.user = { id: userCheckData.id, login: userCheckData.login };

        return res.json({ user: userDto });
      }
      return res.json({ message: 'пользователь не авторизован' });
    } catch (error) {
      return res.json(error.message);
    }
  }
}

module.exports = new UserController();
