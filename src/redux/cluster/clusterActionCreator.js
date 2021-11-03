import {
  CLUSTER_FETCH_REQUESTED,
  CLUSTER_FETCH_ALL_NODES_REQUESTED,
} from './clusterActionType';

export const fetchClusterDetails = () => {
  return {
    type: CLUSTER_FETCH_REQUESTED
  }
}

export const fetchAllTreeNodes = () => {
  return {
    type: CLUSTER_FETCH_ALL_NODES_REQUESTED
  }
}
