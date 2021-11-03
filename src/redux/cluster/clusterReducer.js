import {
  CLUSTER_FETCH_SUCCESS,
  CLUSTER_FETCH_ALL_NODES_SUCCESS
} from './clusterActionType';

const initialState = {
  clusterInfo: {
    KsqlServerInfo: {
      ksqlServiceId: ''
    }
  },
  treeNodes: {
    streams: [],
    tables: [],
    topics: []
  }
};

const clusterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLUSTER_FETCH_SUCCESS:
      return {
        ...state,
        clusterInfo: action.payload
      };
    case CLUSTER_FETCH_ALL_NODES_SUCCESS:
      return {
        ...state,
        treeNodes: action.payload
      };
    default:
      return state;
  }
}

export default clusterReducer;
