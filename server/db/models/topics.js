const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'topic_id' });
    }
  }
  Topic.init({
    topic_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Topic',
    timestamps: false,
  });
  return Topic;
};
