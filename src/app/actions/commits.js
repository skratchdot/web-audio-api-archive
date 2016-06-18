import * as types from '~/src/app/constants/ActionTypes';

export function setCommits(commits) {
  return {
    type: types.SET_COMMITS,
    payload: commits
  };
}
