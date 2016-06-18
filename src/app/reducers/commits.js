import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';
import defaultCommits from '../../../data/commits.json';

export function toList(commits) {
  return Immutable.fromJS(commits).sortBy((commit) => commit.get('time'));
}

export default function (state = toList(defaultCommits), action) {
  switch (action.type) {
  case types.SET_COMMITS:
    return Array.isArray(action.payload) ? toList(action.payload) : state;
  default:
    return state;
  }
}
