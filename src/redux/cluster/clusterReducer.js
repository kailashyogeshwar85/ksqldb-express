import { CLUSTER_FETCH_SUCCESS } from './clusterActionType';

const initialState = {
  clusterInfo: []
};

const clusterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLUSTER_FETCH_SUCCESS:
      return {
        ...state,
        clusterInfo: action.payload
      };
    default:
      return state;
  }
}

export default clusterReducer;
