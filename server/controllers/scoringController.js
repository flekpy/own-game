const { Score } = require('../db/models');

class ScoringController {
  async saveScore(req, res) {
    try {
      const { id } = req.params;
      const { points } = req.body;
      const { dataValues } = await Score.create({ points, user_id: id });
      if (dataValues.id) {
        return res.json({ message: 'сохранено' });
      }
      return res.json({ message: 'ошибка сервера, попробуйте позже' });
    } catch (error) {
      return res.json(error.message);
    }
  }
}

module.exports = new ScoringController();
