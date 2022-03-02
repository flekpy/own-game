import { useState } from 'react';

interface InputsState {
  login?: string;
  email: string;
  password: string;
}

export default function useChangeInput() {
  const initialState = { login: '', email: '', password: '' };
  const [inputsValue, setInputsValue] = useState<InputsState>(initialState);

  const changeInputValue: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputsValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return { inputsValue, changeInputValue };
}
