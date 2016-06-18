import { createSelector } from 'reselect';

export function commitsSelector(state) {
  return state.commits;
}

export function selectedCommitSelector(state) {
  return state.selectedCommit;
}

export const selectedIndexSelector = createSelector(
  commitsSelector,
  selectedCommitSelector,
  (commits, selectedCommit) => {
    return commits.indexOf(selectedCommit);
  }
);

export const selectedHashSelector = createSelector(
  selectedCommitSelector,
  (selectedCommit) => selectedCommit.get('hash') || ''
);
