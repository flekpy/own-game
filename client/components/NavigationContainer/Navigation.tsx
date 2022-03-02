import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { useContext, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Navigation.module.scss';
import { ModalContext } from '../../context/ModalContext/ModalContext';
import Auth from '../Auth/Auth';
import { logoutUser } from '../../store/actions/userAction';

export const NavigationContainer: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { login, id } = useTypedSelector((state) => state.user.userData);
  const { openModal, closeModal } = useContext(ModalContext);

  function handlerOpenModal(): void {
    openModal({ children: <Auth />, isFormAuth: true });
  }

  useEffect(() => {
    if (login) {
      closeModal();
    } else {
      router.push(`/`);
    }
  }, [login]);

  return (
    <>
      <Head>
        <title>My game</title>
      </Head>
      <nav className={styles.navigation}>
        <Link href="/">
          <a className={styles.navigation__link}>Своя Игра</a>
        </Link>
        {login ? (
          <button
            onClick={() => dispatch(logoutUser())}
            className={styles.navigation__btn}
          >
            выйти
          </button>
        ) : (
          <button onClick={handlerOpenModal} className={styles.navigation__btn}>
            войти
          </button>
        )}
      </nav>
      <div className={styles.navigation__children}>{children}</div>
    </>
  );
};
