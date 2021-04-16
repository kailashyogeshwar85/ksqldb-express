import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import reduxLogger from 'redux-logger';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      reduxLogger,
      thunk,
    )
  )
);

export default store;
