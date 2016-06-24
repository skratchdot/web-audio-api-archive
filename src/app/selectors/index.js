import { createSelector } from 'reselect';
import moment from 'moment';

export function commitsSelector(state) {
  return state.commits;
}
export const commitsReversedSelector = createSelector(
  commitsSelector,
  (commits) => {
    return commits.reverse();
  }
);
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
const selectedAttr = (attr, val) => createSelector(
  selectedCommitSelector,
  (selectedCommit) => selectedCommit.get(attr) || val
);
export const selectedHash = selectedAttr('hash', '');
export const selectedName = selectedAttr('name', '');
export const selectedEmail = selectedAttr('email', '');
export const selectedSubject = selectedAttr('subject', '');
export const selectedBody = selectedAttr('body', '');
export const selectedMd5 = selectedAttr('md5', '');
export const selectedTime = selectedAttr('time', 0);
export const selectedTimeMs = createSelector(
  selectedTime,
  (time) => time * 1000
);
export const selectedTimeMoment = createSelector(
  selectedTimeMs,
  (timeMs) => moment(timeMs)
);
export const selectedTimeFormat = createSelector(
  selectedTimeMoment,
  (timeMoment) => timeMoment.format('dddd, MMMM Do YYYY, h:mm:ss a')
);
export const selectedTimeHuman = createSelector(
  selectedTimeMoment,
  (timeMoment) => timeMoment.fromNow()
);
