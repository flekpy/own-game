const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'id' });
    }
  }
  Score.init({
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Score',
    timestamps: false,
  });
  return Score;
};
