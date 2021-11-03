import { call, put, takeLatest } from 'redux-saga/effects';
import API from 'utils/api.util';
import * as queryEditorAPI from './queryEditorApi';
import {
  QUERY_EXECUTE_REQUESTED,
  QUERY_EXECUTE_REQUEST_SUCCESS,
  QUERY_EXECUTE_REQUEST_FAILED,
} from './queryEditorActionTypes.js';

function *executeQuery(action) {
  try {
    // invoke the handler for processing the event
    const { data } = yield call(
      API.sendRequest,
      queryEditorAPI.executeQuery,
      action.payload
    );

    // on success dispatch success event so reducer will derive new state.

    yield put({
      type: QUERY_EXECUTE_REQUEST_SUCCESS,
      payload: data.data
    });
  } catch(e) {
    yield put({
      type: QUERY_EXECUTE_REQUEST_FAILED,
      payload: e.response.data
    });
  }
}


// configure Event Handler
function *queryEditorSaga() {
  yield takeLatest(QUERY_EXECUTE_REQUESTED, executeQuery);
}

export default queryEditorSaga;
