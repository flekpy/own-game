import React, { useState } from 'react';
import { ModalContext } from './ModalContext';
import { Modal } from '../../components/Modal/Modal';

type ModalProps = {
  children: React.ReactNode;
};

export default function ModalProvider({ children }: ModalProps) {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactElement | null>(
    null
  );

  const openModal = (modalConfig: React.ReactElement): void => {
    setModalContent(modalConfig);
    setModalOpened(true);
  };

  const closeModal = (): void => {
    setModalOpened(false);
  };

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && <Modal {...modalContent} />}
      {children}
    </ModalContext.Provider>
  );
}
