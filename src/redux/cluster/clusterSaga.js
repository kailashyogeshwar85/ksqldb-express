import { call, put, takeLatest } from 'redux-saga/effects'
import API from 'utils/api.util';
import * as clusterAPI from './clusterApi';

import {
  CLUSTER_FETCH_REQUESTED,
  CLUSTER_FETCH_SUCCESS,
  CLUSTER_FETCH_FAILED,
  CLUSTER_FETCH_ALL_NODES_REQUESTED,
  CLUSTER_FETCH_ALL_NODES_SUCCESS,
  CLUSTER_FETCH_ALL_NODES_FAILED,
} from './clusterActionType';


// worker Saga: will be fired on CLUSTER_FETCH_REQUESTED actions
function* fetchClusterInfo(action) {
  try {
    const { data } = yield call(
      API.sendRequest,
      clusterAPI.fetchClusterInfoReq,
      action.payload
    );

    yield put({
      type: CLUSTER_FETCH_SUCCESS,
      payload: data.data
    });
  } catch (e) {
    yield put({
      type: CLUSTER_FETCH_FAILED,
      payload: { error: 'Failed to fetch ClusterInfo' }
    });
  }
}

function* fetchAllTreeNodes(action) {
  try {
    const { data } = yield call(
      API.sendRequest,
      clusterAPI.fetchAllTreeNodes,
      action.payload
    );

    yield put({
      type: CLUSTER_FETCH_ALL_NODES_SUCCESS,
      payload: data.data
    });
  } catch (e) {
    yield put({
      type: CLUSTER_FETCH_ALL_NODES_FAILED,
      payload: {
        error: 'Failed to fetch tree nodes.'
      }
    });
  }
}
// use the latest actions being dispatched
function* clusterSaga() {
  yield takeLatest(CLUSTER_FETCH_REQUESTED, fetchClusterInfo);
  yield takeLatest(CLUSTER_FETCH_ALL_NODES_REQUESTED, fetchAllTreeNodes);
}

export default clusterSaga;



