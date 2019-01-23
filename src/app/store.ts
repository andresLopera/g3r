import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducer, State } from './state';



export const store: Store<State> = createStore(
  reducer,
  compose(
    applyMiddleware(reduxThunk)
  )
);
