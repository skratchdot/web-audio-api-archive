import { combineReducers } from 'redux';
import commits from './commits';
import { routerReducer } from 'react-router-redux';
import selectedCommit from './selectedCommit';

const rootReducer = combineReducers({
  commits,
  routing: routerReducer,
  selectedCommit
});

export default rootReducer;
