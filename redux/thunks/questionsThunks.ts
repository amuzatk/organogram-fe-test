// redux/thunks/questionsThunks.ts
import { AppThunk } from '../store';
import axios from 'axios';
import { setQuestions, setLoading, setError } from '../slices/questionSlice';
import { RootState } from '../store';

interface ServerQuestionResponse {
  [id: string]: {
    question: string;
    options: string[];
  };
}

export const fetchQuestions = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const token = (getState() as RootState).token.value;
    const response = await axios.get<ServerQuestionResponse>('https://qt.organogram.app/questions', {
      headers: {
        Token: token
      }
    });
    dispatch(setQuestions(Object.entries(response.data).map(([id, data]) => ({ id, ...data }))));
  } catch (error) {
    const errorMessage = (error as Error).message;
    dispatch(setError(errorMessage));
  } finally {
    dispatch(setLoading(false));
  }
};
