import {
  QUERY_EXECUTE_REQUESTED
} from './queryEditorActionTypes.js';

export const executeQuery = () => {
  return {
    type: QUERY_EXECUTE_REQUESTED
  };
}
