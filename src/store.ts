import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, State } from './app/state';

export const store: Store<State> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
  )
);