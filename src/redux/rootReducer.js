import { combineReducers } from 'redux';
import userReducer from 'redux/user/userReducer.js';
import clusterReducer from 'redux/cluster/clusterReducer';

const appReducers = combineReducers({
  userReducer,
  clusterReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }
  return appReducers(state, action);
}

export default rootReducer;
