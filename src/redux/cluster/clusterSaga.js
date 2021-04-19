import { call, put, takeLatest } from 'redux-saga/effects'
import API from 'utils/api.util';
import * as clusterAPI from './clusterApi';

import {
  CLUSTER_FETCH_REQUESTED,
  CLUSTER_FETCH_SUCCESS,
  CLUSTER_FETCH_FAILED,
} from './clusterActionType';


// worker Saga: will be fired on CLUSTER_FETCH_REQUESTED actions
function *fetchClusterInfo(action) {
  try {
    const cluster = yield call(
      API.sendRequest,
      clusterAPI.fetchClusterInfoReq,
      action.payload
    );
    yield put({
      type: CLUSTER_FETCH_SUCCESS,
      cluster
    });
  } catch(e) {
    console.error('error ', e);
    yield put({
      type: CLUSTER_FETCH_FAILED,
      message: 'Failed to fetch ClusterInfo'
    });
  }
}

// use the latest actions being dispatched
function *clusterSaga() {
  yield takeLatest(CLUSTER_FETCH_REQUESTED, fetchClusterInfo);
}

export default clusterSaga;



