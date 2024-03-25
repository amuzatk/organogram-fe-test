import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { RootState, AppThunk } from '../store'; // Import AppThunk from store
import { setLoading, setError } from '../slices/updateQuestionSlice';
import { fetchQuestions } from './questionsThunks';

interface UpdateQuestionData {
  id: string;
  question: string;
  options: string[];
}

export const updateQuestionAsync = createAsyncThunk(
  'updateQuestion/updateQuestionAsync',
  async ({ id, question, options }: UpdateQuestionData, { getState, dispatch }) => {
    try {
      dispatch(setLoading(true));
      const token = (getState() as RootState).token.value;
      await axios.put(
        `https://qt.organogram.app/questions/${id}`,
        { question, options },
        {
          headers: {
            Token: token,
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(setLoading(false));
      // dispatch(fetchQuestions());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        dispatch(setError(error.message));
      } else {
        dispatch(setError('An error occurred'));
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

