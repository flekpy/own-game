import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import { authUser } from '../store/actions/userAction';

import '../styles/globals.scss';
import ModalProvider from '../context/ModalContext/ModalContextProvider';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);

  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
