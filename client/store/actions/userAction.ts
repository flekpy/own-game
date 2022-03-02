import { UserAction, UserActionType } from '../types/userTypes';
import { Dispatch } from 'react';
import axios from 'axios';

export const regUser =
  (userData: object) => async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionType.LOADING });
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const { data } = await axios.post(
        'http://localhost:5000/api/registration',
        userData,
        { headers, withCredentials: true }
      );

      if (data.message === 'Регистрация прошла успешно') {
        dispatch({
          type: UserActionType.REGISTER_USER_SUCCESS,
          payload: data.user,
        });
      } else if (data.message !== 'Регистрация прошла успешно') {
        dispatch({
          type: UserActionType.ERROR,
          payload: data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: UserActionType.ERROR,
        payload: 'Ошибка при регистрации',
      });
    }
  };

export const loginUser =
  (userData: object) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.LOADING });
      const headers = {
        'Content-Type': 'application/json',
      };
      const { data } = await axios.post(
        'http://localhost:5000/api/login',
        userData,
        { headers, withCredentials: true }
      );
      if (data.message === 'авторизация прошла успешно') {
        dispatch({
          type: UserActionType.LOGIN_USER_SUCCESS,
          payload: data.user,
        });
      } else if (data.message !== 'авторизация прошла успешно') {
        dispatch({
          type: UserActionType.ERROR,
          payload: data.message,
        });
      }
    } catch (error: any) {
      dispatch({
        type: UserActionType.ERROR,
        payload: error.message,
      });
    }
  };

export const logoutUser = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.LOADING });
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = await axios.get('http://localhost:5000/api/logout', {
      headers,
      withCredentials: true,
    });

    if (data.status === 200) {
      dispatch({ type: UserActionType.LOGOUT_USER_SUCCESS });
    }
  } catch (error) {
    dispatch({
      type: UserActionType.ERROR,
      payload: 'ошибка при выходе из системы',
    });
  }
};

export const authUser = () => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.LOADING });
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const { data } = await axios.get('http://localhost:5000/api/users/me', { headers, withCredentials: true });
    if (data.user) {
      dispatch({ type: UserActionType.AUTH_USER_SUCCESS, payload: data.user });
    } else {
      dispatch({ type: UserActionType.ERROR, payload: 'пользователь не авторизован' });
    }
  } catch (error) {
    dispatch({ type: UserActionType.ERROR, payload: 'пользователь не авторизован' });
  }
};

export const scoringMinus = (payload: number) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.LOADING });
  try {
    dispatch({ type: UserActionType.SCORING_MINUS, payload: payload });
  } catch (error: any) {
    dispatch({ type: UserActionType.ERROR, payload: error.message });
  }
}

export const scoringPlus = (payload: number) => async (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.LOADING });
  try {
    dispatch({ type: UserActionType.SCORING_PLUS, payload: payload });
  } catch (error: any) {
    dispatch({ type: UserActionType.ERROR, payload: error.message });
  }
}
