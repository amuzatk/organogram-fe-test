// redux/thunks/createQuestionThunks.ts
import { AppThunk } from '../store';
import { addQuestion, setLoading, setError } from '../slices/createQuestionSlice';
import { RootState } from '../store';
import axios from 'axios';
import { fetchQuestions } from './questionsThunks';

interface Question {
  question: string;
  options: string[];
}

export const createQuestion = (newQuestion: Question): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const token = (getState() as RootState).token.value;
    await axios.post('https://qt.organogram.app/questions', newQuestion, {
      headers: {
        Token: token,
        'Content-Type': 'application/json',
      },
    });
    dispatch(setLoading(false));
    dispatch(fetchQuestions());
  } catch (error) {
    dispatch(setError((error as Error).message));
    dispatch(setLoading(false));
  }
};
