import { MakeStore, Context, createWrapper } from 'next-redux-wrapper';
import { reducer, RootState } from './reducers';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
