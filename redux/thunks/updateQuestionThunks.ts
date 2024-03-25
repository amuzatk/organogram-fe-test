import axios from 'axios';
import { RootState, AppThunk } from '../store';
import { setLoading, setError } from '../slices/updateQuestionSlice';
import { fetchQuestions } from './questionsThunks';

interface UpdateQuestionData {
  id: string;
  question: string;
  options: string[];
}

export const updateQuestion = (data: UpdateQuestionData): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const token = (getState() as RootState).token.value;
    await axios.put(
      `https://qt.organogram.app/questions/${data.id}`,
      { question: data.question, options: data.options },
      {
        headers: {
          Token: token,
          'Content-Type': 'application/json',
        },
      }
    );
    dispatch(setLoading(false));
    dispatch(fetchQuestions());
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(setError(error.message));
    } else {
      dispatch(setError('An error occurred'));
    }
  } finally {
    dispatch(setLoading(false));
  }
};
