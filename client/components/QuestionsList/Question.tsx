import React from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import ReplyForm from '../ReplyForm/ReplyForm'
import styles from './question.module.scss';

const Question: React.FC<any> = ({ data }) => {
  const { openModal } = useContext(ModalContext);

  function handlerOpenModal(): void {
    openModal({ children: <ReplyForm data={data} />, isFormAuth: false });
  }
  return (
    <div onClick={handlerOpenModal} className={styles.questionItem}>
      <span>{data['Questions.points']}</span>
    </div>
  );
};
export default Question;
