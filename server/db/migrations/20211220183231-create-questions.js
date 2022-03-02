module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question_topic: {
        type: Sequelize.TEXT,
      },
      answer: {
        type: Sequelize.TEXT,
      },
      points: {
        type: Sequelize.INTEGER,
      },
      topic_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Topics',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  },
};
