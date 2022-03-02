const { Router } = require('express');

const router = new Router();
const { check } = require('express-validator');
const questions = require('../controllers/questions');
const scoringController = require('../controllers/scoringController');
const userController = require('../controllers/userController');

router.post(
  '/registration',
  [
    check('login', 'имя пользователя не должно быть пустым').notEmpty(),
    check('email', 'email пользователя не должен быть пустым').notEmpty(),
    check('password', 'пароль не может быть меньше 3 символов').isLength({ min: 1 }),
  ],
  userController.registration,
);

router.post('/login', userController.login);
router.post('/users/:id', scoringController.saveScore);
router.get('/logout', userController.logout);
router.get('/users/me', userController.authMe);
router.get('/questions', questions.getQuestions);

module.exports = router;
