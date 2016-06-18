import * as types from '../constants/ActionTypes';
import Immutable from 'immutable';

export default function (state = Immutable.Map(), action) {
  switch (action.type) {
  case types.SET_SELECTED_COMMIT:
    return action.payload;
  default:
    return state;
  }
}
