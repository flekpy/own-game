import React from 'react';
import Question from './Question';
import Answer from './Answer';
import styles from './question.module.scss';

interface QuestionsProps {
  data: {
    topicTheme: any[];
    bond: any[];
    chess: any[];
    country: any[];
    history: any[];
    literature: any[];
    philosophy: any[];
  };
}

const QuestionsList: React.FC<QuestionsProps> = ({ data }) => {
  return (
    <>
      <div className={styles.answerList}>
        {data.topicTheme.map((item) => (
          <Answer data={item} key={item.topic_title} />
        ))}
      </div>
      <div className={styles.containerQuest}>
        <div className={styles.questionList}>
          {data.chess.map((item) => (
            <Question data={item} key={item['Questions.id']} />
          ))}
        </div>
        <div className={styles.questionList}>
          {data.philosophy.map((item) => (
            <Question data={item} key={item['Questions.id']} />
          ))}
        </div>
        <div className={styles.questionList}>
          {data.literature.map((item) => (
            <Question data={item} key={item['Questions.id']} />
          ))}
        </div>
        <div className={styles.questionList}>
          {data.history.map((item) => (
            <Question data={item} key={item['Questions.id']} />
          ))}
        </div>
        <div className={styles.questionList}>
          {data.bond.map((item) => (
            <Question data={item} key={item['Questions.id']} />
          ))}
        </div>
        <div className={styles.questionList}>
          {data.country.map((item) => (
            <Question data={item} key={item['Questions.id']} />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionsList;
