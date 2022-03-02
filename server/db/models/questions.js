const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, { foreignKey: 'id' });
    }
  }
  Question.init({
    question_topic: {
      type: DataTypes.TEXT,
    },
    answer: {
      type: DataTypes.TEXT,
    },
    points: {
      type: DataTypes.INTEGER,
    },
    topic_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Question',
    timestamps: false,
  });
  return Question;
};
