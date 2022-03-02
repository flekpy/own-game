module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        question_topic: 'Сколько клеток на шахматной доске?',
        answer: '64',
        points: 200,
        topic_id: 1,
      },
      {
        question_topic: 'Сколько в шахматах фигурок у одного игрока?',
        answer: '16',
        points: 400,
        topic_id: 1,
      },
      {
        question_topic: 'Сколько в шахматах видов фигур?',
        answer: '6',
        points: 600,
        topic_id: 1,
      },
      {
        question_topic: 'Самая ценная фигура в шахматах?',
        answer: 'Король',
        points: 800,
        topic_id: 1,
      },
      {
        question_topic: 'Какая страна большинством исследователей считается родиной шахмат?',
        answer: 'Индия',
        points: 1000,
        topic_id: 1,
      },
      {
        question_topic: 'Основной рабочий метод Ф. Бэкона - это?',
        answer: 'Индукция',
        points: 200,
        topic_id: 2,
      },
      {
        question_topic: 'Для Вольтера равенство людей - это, прежде всего, равенство?',
        answer: 'Политическое',
        points: 400,
        topic_id: 2,
      },
      {
        question_topic: 'Учение Фомы Аквинского и целое религиозно-философское направление, им созданное, называется?',
        answer: 'Томизмом',
        points: 600,
        topic_id: 2,
      },
      {
        question_topic: 'Основателем этики в западноевропейской философии считаеться?',
        answer: 'Сократ',
        points: 800,
        topic_id: 2,
      },
      {
        question_topic: 'Все тела в мире имеют цель своего движения и развития, которая заданна Богом как причиной всех причин, считал?',
        answer: 'Аристотель',
        points: 1000,
        topic_id: 2,
      },
      {
        question_topic: 'Русский писатель, автор Дяди Вани?',
        answer: 'Чехов',
        points: 200,
        topic_id: 3,
      },
      {
        question_topic: 'Кто написал роман Тихий Дон?',
        answer: 'Шолохов',
        points: 400,
        topic_id: 3,
      },
      {
        question_topic: 'Как звали Тургенева?',
        answer: 'Иван',
        points: 600,
        topic_id: 3,
      },
      {
        question_topic: 'Как звали отца Татьяны Лариной в романе Пушкина Евгений Онегин?',
        answer: 'Дмитрий',
        points: 800,
        topic_id: 3,
      },
      {
        question_topic: 'Какая настоящая фамилия Максима Горького?',
        answer: 'Пешков',
        points: 1000,
        topic_id: 3,
      },
      {
        question_topic: 'Именно этого грека называют отцом истории?',
        answer: 'Геродот',
        points: 200,
        topic_id: 4,
      },
      {
        question_topic: 'На эти три части была разделена Древняя Греция?',
        answer: 'Северная, Южная, Средняя',
        points: 400,
        topic_id: 4,
      },
      {
        question_topic: 'Именно он отменил долговое рабство в Афинах?',
        answer: 'Солон',
        points: 600,
        topic_id: 4,
      },
      {
        question_topic: 'Так называется остров, на котором жил легендарный Минотавр?',
        answer: 'Крит',
        points: 800,
        topic_id: 4,
      },
      {
        question_topic: 'Раз в год проводился этот суд-голосование, по результатам которого мог отправиться в изгнание любой гражданин Афин?',
        answer: 'остракизм',
        points: 1000,
        topic_id: 4,
      },
      {
        question_topic: 'Сколько фильмов снято о Джеймсе Бонде?',
        answer: '25',
        points: 200,
        topic_id: 5,
      },
      {
        question_topic: 'Кто играл Бонда больше всего?',
        answer: 'Роджер Мур',
        points: 400,
        topic_id: 5,
      },
      {
        question_topic: 'Кто создал персонажа?',
        answer: 'Ян Флеминг',
        points: 600,
        topic_id: 5,
      },
      {
        question_topic: 'Есть ли у Бонда жена?',
        answer: 'Да',
        points: 800,
        topic_id: 5,
      },
      {
        question_topic: 'Какой автомобиль предпочитает Джеймс Бонд?',
        answer: 'Aston Martin',
        points: 1000,
        topic_id: 5,
      },
      {
        question_topic: 'Сколько стран в мире?',
        answer: '197',
        points: 200,
        topic_id: 6,
      },
      {
        question_topic: 'Сколько наций и народностей в России?',
        answer: '190',
        points: 400,
        topic_id: 6,
      },
      {
        question_topic: 'Сколько стран расположено в Европе?',
        answer: '65',
        points: 600,
        topic_id: 6,
      },
      {
        question_topic: 'Страна с самым большим населением?',
        answer: 'Китай',
        points: 800,
        topic_id: 6,
      },
      {
        question_topic: 'Самая малочисленная страна в мире?',
        answer: 'Ватикан',
        points: 1000,
        topic_id: 6,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
