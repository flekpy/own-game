export interface UserState {
  loading: boolean;
  error: null | string;
  userData: {
    id: string | null;
    login: string | null;
    email: string | null;
  };
  score: number;
}

export enum UserActionType {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
  AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
  SCORING_MINUS = 'SCORING_MINUS',
  SCORING_PLUS = 'SCORING_PLUS',
}

interface RegisterUserLoading {
  type: UserActionType.LOADING;
}

interface RegisterUserError {
  type: UserActionType.ERROR;
  payload: string;
}

interface RegisterUserSuccess {
  type: UserActionType.REGISTER_USER_SUCCESS;
  payload: {
    id: string;
    login: string;
    email: string;
  };
}

interface LoginUserSuccess {
  type: UserActionType.LOGIN_USER_SUCCESS;
  payload: {
    id: string;
    login: string;
    email: string;
  };
}

interface LogoutUserSuccess {
  type: UserActionType.LOGOUT_USER_SUCCESS;
}

interface AuthUserSuccess {
  type: UserActionType.AUTH_USER_SUCCESS;
  payload: {
    id: string;
    login: string;
    email: string;
  };
}

interface ScroginMinus {
  type: UserActionType.SCORING_MINUS;
  payload: number;
}

interface ScroginPlus {
  type: UserActionType.SCORING_PLUS;
  payload: number;
}
export type UserAction =
  | RegisterUserLoading
  | RegisterUserError
  | RegisterUserSuccess
  | LogoutUserSuccess
  | LoginUserSuccess
  | AuthUserSuccess
  | ScroginMinus
  | ScroginPlus;
