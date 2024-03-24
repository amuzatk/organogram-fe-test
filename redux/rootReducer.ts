// redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import tokenReducer from './slices/tokenSlice';
import questionFormReducer from './slices/questionFormSlice'; // Import questionFormReducer

const rootReducer = combineReducers({
  questions: questionReducer,
  token: tokenReducer,
  questionForm: questionFormReducer, // Add questionFormReducer here
});

export default rootReducer;
