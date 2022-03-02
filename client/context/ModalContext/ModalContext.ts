import { createContext } from 'react';

interface IContext {
  openModal: (arg: any) => void;
  closeModal: (arg?: boolean) => void;
}

export const ModalContext = createContext<IContext>({
  openModal: (arg) => {},
  closeModal: (arg) => {},
});
