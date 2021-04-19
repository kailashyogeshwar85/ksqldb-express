import { CLUSTER_FETCH_REQUESTED } from './clusterActionType';

export const fetchClusterDetails = () => {
  return {
    type: CLUSTER_FETCH_REQUESTED
  }
}
