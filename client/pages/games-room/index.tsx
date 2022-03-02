import React, { useState } from 'react';
import axios from 'axios';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavigationContainer } from '../../components/NavigationContainer/Navigation';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import saveResultScore from '../../utils/saveResultScore';
import styles from './game.module.scss';

const GamesRoom: React.FC = ({ data }: any) => {
  const { score } = useTypedSelector((state) => state.user);
  const { id } = useTypedSelector((state) => state.user.userData);
  const [saveResult, setSaveResult] = useState('')

  async function handlerSaveResult() {
    const result = await saveResultScore(score, id);
    setSaveResult(result)
  }

  return (
    <NavigationContainer>
      <div className={styles.games__scores}>
        <span>Набрано очков: {score}</span>
      </div>

      <div className={styles.questionsContainer}>
        <QuestionsList data={data} />
      </div>

      <button
        onClick={handlerSaveResult}
        type="button"
        className={styles.games__btn}
      >
        сохранить результат
      </button>
      {saveResult && <span className={styles.save}>{saveResult}</span>}
    </NavigationContainer>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:5000/api/questions');
  return {
    props: { data },
  };
}

export default GamesRoom;
