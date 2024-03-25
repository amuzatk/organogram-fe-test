// // updateQuestionSlice.ts
// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { RootState } from '../store';

// interface UpdateQuestionState {
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UpdateQuestionState = {
//   loading: false,
//   error: null,
// };

// // Thunk for updating a question
// export const updateQuestion = createAsyncThunk(
//   'updateQuestion/updateQuestion',
//   async ({ id, question, options }: { id: string; question: string; options: string[] }, { getState }) => {
//     try {
//       const token = (getState() as RootState).token.value;
//       const response = await axios.put<string>(`https://qt.organogram.app/questions/${id}`, { question, options }, {
//         headers: {
//           Token: token,
//           'Content-Type': 'application/json',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       throw (error as Error).message;
//     }
//   }
// );

// export const updateQuestionSlice = createSlice({
//   name: 'updateQuestion',
//   initialState,
//   reducers: {
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(updateQuestion.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(updateQuestion.fulfilled, (state) => {
//       state.loading = false;
//     });
//     builder.addCase(updateQuestion.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message || 'Failed to update question';
//     });
//   },
// });

// export const { setLoading, setError } = updateQuestionSlice.actions;

// export default updateQuestionSlice.reducer;


// updateQuestionSlice.ts
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
