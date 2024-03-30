import { createSlice } from '@reduxjs/toolkit';

interface UpdateQuestionState {
  loading: boolean;
  error: string | null;
}

const initialState: UpdateQuestionState = {
  loading: false,
  error: null,
};

export const updateQuestionSlice = createSlice({
  name: 'updateQuestion',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setLoading, setError, clearError } = updateQuestionSlice.actions;

export default updateQuestionSlice.reducer;
