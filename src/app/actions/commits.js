import * as types from '../constants/ActionTypes';

export function setCommits(commits) {
  return {
    type: types.SET_COMMITS,
    payload: commits
  };
}
