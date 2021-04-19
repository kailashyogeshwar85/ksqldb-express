import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk,
      sagaMiddleware,
    )
  )
);

// Apply All the sagas
for (let saga in Sagas) {
  sagaMiddleware.run(Sagas[saga]);
}

export default store;
