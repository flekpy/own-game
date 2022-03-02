import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import useChangeInput from '../../../hooks/useChangeInput';
import styles from '../Auth.module.scss';
import { loginUser } from '../../../store/actions/userAction';

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { inputsValue, changeInputValue } = useChangeInput();
  const { loading, error } = useTypedSelector((state) => state.user);

  const submitFormFetch = async (event: any) => {
    event.preventDefault();
    dispatch(loginUser(inputsValue));
  };

  return (
    <form onSubmit={submitFormFetch} className={styles.formAuth}>
      <div className={styles.inputContainer}>
        <input
          onChange={changeInputValue}
          className={styles.formAuth__input}
          placeholder="эл. почта"
          name="email"
          type="text"
        />
        <span className="material-icons-outlined">email</span>
      </div>

      <div className={styles.inputContainer}>
        <input
          onChange={changeInputValue}
          className={styles.formAuth__input}
          placeholder="пароль"
          name="password"
          type="password"
        />
        <span className="material-icons-outlined">lock</span>
      </div>
      <button className={styles.formAuth__btn} type="submit">
        войти
      </button>
      {error ? (
        <span className={styles.formAuth__titleError}>{error}</span>
      ) : null}
    </form>
  );
};
