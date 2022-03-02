module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Topics', [
      {
        topic_title: 'Шахматы',
      },
      {
        topic_title: 'Философия',
      },
      {
        topic_title: 'Литература',
      },
      {
        topic_title: 'История',
      },
      {
        topic_title: 'Агент 007',
      },
      {
        topic_title: 'Страны и народы',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
