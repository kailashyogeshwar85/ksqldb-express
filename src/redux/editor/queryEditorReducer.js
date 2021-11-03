import {
  QUERY_EXECUTE_REQUESTED,
  QUERY_EXECUTE_REQUEST_SUCCESS,
  QUERY_EXECUTE_REQUEST_FAILED,
} from './queryEditorActionTypes';

const initialState = {
  queryResult: [],
  queryExecuteSuccess: false,
  queryExecuteError: ''
}

const queryEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_EXECUTE_REQUESTED:
      return {
        ...state,
        queryExecuteError: ''
      }
    case QUERY_EXECUTE_REQUEST_SUCCESS:
      return {
        ...state,
        queryExecuteSuccess: true,
        queryResult: action.payload,
        queryExecuteError: '',
      };
    case QUERY_EXECUTE_REQUEST_FAILED:
      return {
        ...state,
        queryExecuteSuccess: false,
        queryExecuteError: action.payload.message,
      }
    default:
      return state;
  }
}

export default queryEditorReducer;
