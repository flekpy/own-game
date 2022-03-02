import { UserAction, UserActionType, UserState } from '../types/userTypes';

const initialState: UserState = {
  loading: false,
  error: null,
  userData: {
    id: null,
    login: null,
    email: null,
  },
  score: 0,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.LOADING: {
      return { ...state, loading: true, error: null };
    }

    case UserActionType.ERROR: {
      return { ...state, loading: false, error: action.payload };
    }

    case UserActionType.REGISTER_USER_SUCCESS:
    case UserActionType.LOGIN_USER_SUCCESS:
    case UserActionType.AUTH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        userData: action.payload,
      };
    }

    case UserActionType.LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        userData: { id: null, email: null, login: null },
      };
    }

    case UserActionType.SCORING_MINUS: {
      return {
        ...state,
        loading: false,
        error: null,
        score: state.score - action.payload,
      };
    }

    case UserActionType.SCORING_PLUS: {
      return {
        ...state,
        loading: false,
        error: null,
        score: state.score + action.payload,
      };
    }

    default:
      return state;
  }
};
