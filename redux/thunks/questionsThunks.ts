// redux/thunks/questionsThunks.ts
import { AppThunk } from '../store';
import axios from 'axios';
import { setQuestions, setLoading, setError } from '../slices/questionSlice';
import { RootState } from '../store';

interface QuestionOption {
  id: string;
  question: string;
  options: string[];
}

type QuestionResponse = Record<string, QuestionOption>;

export const fetchQuestions = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const token = (getState() as RootState).token.value;
    const response = await axios.get<QuestionResponse>('https://qt.organogram.app/questions', {
      headers: {
        Token: token
      }
    });
    dispatch(setQuestions(Object.values(response.data)));
  } catch (error) {
    const errorMessage = (error as Error).message; // Cast error to Error type to access message property
    dispatch(setError(errorMessage));
  } finally {
    dispatch(setLoading(false));
  }
};