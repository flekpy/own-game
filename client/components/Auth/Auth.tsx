import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { LoginForm } from './Login/LoginForm';
import { RegisterForm } from './Register/RegisterForm';

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('login');

  const handleLogin: React.MouseEventHandler<HTMLElement> = (e): void => {
    setActiveTab('login');
  };

  const handleRegister: React.MouseEventHandler<HTMLElement> = (e) => {
    setActiveTab('register');
  };

  return (
    <div className={styles.formContainer}>
      <ul className={styles.formContainer__ulTabs}>
        <li
          onClick={handleLogin}
          className={
            activeTab === 'login'
              ? `${styles.activeLi} ${styles.formContainer__liLogin}`
              : `${styles.formContainer__liLogin}`
          }
        >
          войти
        </li>
        <li
          onClick={handleRegister}
          className={activeTab === 'register' ? `${styles.activeLi}` : ''}
        >
          регистрация
        </li>
      </ul>
      {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default Auth;
