import { combineReducers } from 'redux';

import basicReducer from './basicReducer';

const rootReducer = combineReducers({
  basicReducer,
});

export default rootReducer;
