import * as types from '../constants/ActionTypes';

export function setSelectedCommit(commit) {
  return {
    type: types.SET_SELECTED_COMMIT,
    payload: commit
  };
}
