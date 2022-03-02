import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import styles from './reply.module.scss';
import { scoringMinus, scoringPlus } from '../../store/actions/userAction';

interface ReplyFormProps {
  data: {
    ['Questions.question_topic']: string;
    ['Questions.answer']: string;
    ['Questions.points']: number;
  };
}

const ReplyForm: React.FC<ReplyFormProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);
  const [inputValue, setInputValue] = useState<string>('');

  function answerCheck() {
    if (inputValue.toLowerCase() !== data['Questions.answer'].toLowerCase()) {
      dispatch(scoringMinus(data['Questions.points']));
    } else {
      dispatch(scoringPlus(data['Questions.points']));
    }
    closeModal();
  }

  return (
    <div className={styles.replyForm}>
      <span className={styles.replyForm__title}>
        {data['Questions.question_topic']}
      </span>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.replyForm__input}
        type="text"
        placeholder="ваш ответ:"
      />
      <button onClick={answerCheck} className={styles.replyForm__btn}>
        ответить
      </button>
    </div>
  );
};
export default ReplyForm;
