import { USER_LOGIN_SUCCESS } from './userActionTypes';

const initialState = {
  loggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_SUCCESS:
      return { ...state }
    default:
      return state;
  }
}

export default userReducer;
