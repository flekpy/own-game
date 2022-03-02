import React from 'react';
import styles from './question.module.scss';

const Answer: React.FC<any> = ({ data }) => {
  return <span className={styles.answerTitle}>{data.topic_title}</span>;
};
export default Answer;
