import React from 'react';
import useCloseModal from '../../hooks/useModalClose';
import styles from './Modal.module.scss';

interface ModalProps {
  isFormAuth?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, isFormAuth }) => {
  const { closing, handleClose } = useCloseModal();

  const backdropStyle = closing
    ? `${styles.backdrop} ${styles.backdropHide}`
    : `${styles.backdrop}`;

  const modalSizeStyle = isFormAuth
    ? `${styles.modal}`
    : `${styles.modalBigSize}`;

  return (
    <div className={backdropStyle} onClick={handleClose}>
      <div
        className={modalSizeStyle}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
