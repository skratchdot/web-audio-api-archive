import * as types from '~/src/app/constants/ActionTypes';

export function setSelectedCommit(commit) {
  return {
    type: types.SET_SELECTED_COMMIT,
    payload: commit
  };
}
