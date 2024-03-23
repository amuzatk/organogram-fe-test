// redux/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import tokenReducer from './slices/tokenSlice';

const rootReducer = combineReducers({
  questions: questionReducer,
  token: tokenReducer,
});

export default rootReducer;
