import { USER_LOGIN_SUCCESS } from './userActionTypes';

const userLoginSuccess = (userData) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: userData,
  }
};

export default userLoginSuccess;
