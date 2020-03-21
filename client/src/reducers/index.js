import singleGameReducer from './singleGame';
import multiGameReducer from './multiGame';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  singleGameReducer, multiGameReducer
})

export default allReducers;