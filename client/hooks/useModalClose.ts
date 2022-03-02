import { useState, useContext } from 'react';
import { ModalContext } from '../context/ModalContext/ModalContext';

export default function useCloseModal() {
  const { openModal, closeModal } = useContext(ModalContext);
  const [closing, setClosing] = useState<boolean>(false);

  function handleClose(): void {
    setClosing(true);

    const closeTimeout = setTimeout(() => {
      closeModal(true);
      clearTimeout(closeTimeout);
    }, 300);
  }

  return { closing, setClosing, handleClose };
}
