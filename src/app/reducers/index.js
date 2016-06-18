import { combineReducers } from 'redux';
import commits from '~/src/app/reducers/commits';
import { routerReducer } from 'react-router-redux';
import selectedCommit from '~/src/app/reducers/selectedCommit';

const rootReducer = combineReducers({
  commits,
  routing: routerReducer,
  selectedCommit
});

export default rootReducer;
