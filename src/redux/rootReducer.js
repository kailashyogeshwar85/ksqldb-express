import { combineReducers } from 'redux';
import userReducer from 'redux/user/userReducer.js';

const appReducers = combineReducers({
  userReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }
  return appReducers;
}

export default rootReducer;
