import React from 'react';
import { useRouter } from 'next/router';

import styles from './id.module.scss';

const User: React.FC = () => {
  const router = useRouter();
  return (
      <section className={styles.personCabinet}>
        <button
          onClick={() => router.push('/games-room')}
          className={styles.personCabinet__startBtn}
        >
          начать новую игру
        </button>
      </section>
  );
};
export default User;
