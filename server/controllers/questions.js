const { Question, Topic } = require('../db/models');

class Questions {
  async getQuestions(req, res) {
    try {
      const topicTheme = await Topic.findAll({ raw: true });
      const chess = await Topic.findAll({
        where: { id: 1 },
        include: Question,
        raw: true,
      });
      const philosophy = await Topic.findAll({
        where: { id: 2 },
        include: Question,
        raw: true,
      });
      const literature = await Topic.findAll({
        where: { id: 3 },
        include: Question,
        raw: true,
      });
      const history = await Topic.findAll({
        where: { id: 4 },
        include: Question,
        raw: true,
      });
      const bond = await Topic.findAll({
        where: { id: 5 },
        include: Question,
        raw: true,
      });
      const country = await Topic.findAll({
        where: { id: 6 },
        include: Question,
        raw: true,
      });

      return res.json({
        topicTheme,
        chess,
        philosophy,
        literature,
        history,
        bond,
        country,
      });
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = new Questions();
