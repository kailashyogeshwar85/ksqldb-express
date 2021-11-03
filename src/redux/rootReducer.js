import { combineReducers } from 'redux';
import userReducer from 'redux/user/userReducer.js';
import clusterReducer from 'redux/cluster/clusterReducer';
import queryEditorReducer from 'redux/editor/queryEditorReducer';

const appReducers = combineReducers({
  userReducer,
  clusterReducer,
  queryEditorReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }
  return appReducers(state, action);
}

export default rootReducer;
