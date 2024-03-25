// redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import questionReducer from './slices/questionSlice';
import tokenReducer from './slices/tokenSlice';
import questionFormReducer2 from './slices/createQuestionSlice'; 
import updateQuestionReducer from './slices/updateQuestionSlice'
const rootReducer = combineReducers({
  questions: questionReducer,
  token: tokenReducer,
  createQuestion: questionFormReducer2,
  updateQuestion: updateQuestionReducer,
});

export default rootReducer;
