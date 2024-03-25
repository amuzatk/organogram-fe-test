// redux/thunks/deleteQuestionThunks.ts
import { AppThunk } from '../store';
import axios from 'axios';
import { setLoading, setError } from '../slices/questionSlice'; // Update this slice as needed
import { RootState } from '../store';
import { fetchQuestions } from './questionsThunks';

export const deleteQuestion = (questionId: string): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const token = (getState() as RootState).token.value;
    await axios.delete(`https://qt.organogram.app/questions/${questionId}`, {
      headers: {
        Token: token,
      },
    });
    dispatch(fetchQuestions());
    // Optionally, you can dispatch an action to update the state to reflect the deletion
    // dispatch(deleteQuestionSuccess(questionId));
  } catch (error) {
    const errorMessage = (error as Error).message;
    dispatch(setError(errorMessage));
  } finally {
    dispatch(setLoading(false));
  }
};
