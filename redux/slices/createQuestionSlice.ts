// // redux/slices/createQuestionSlice.ts
// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { RootState } from '../store';

// interface CreateQuestionState {
//   loading: boolean;
//   error: string | null;
// }

// const initialState: CreateQuestionState = {
//   loading: false,
//   error: null,
// };

// export const addQuestion = createAsyncThunk(
//   'createQuestion/addQuestion',
//   async (newQuestion: Question, { getState }) => {
//     try {
//       const token = (getState() as RootState).token.value;
//       const response = await axios.post<string>('https://qt.organogram.app/questions', newQuestion, {
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

// export const createQuestionSlice = createSlice({
//   name: 'createQuestion',
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
//     builder.addCase(addQuestion.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(addQuestion.fulfilled, (state) => {
//       state.loading = false;
//     });
//     builder.addCase(addQuestion.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message || 'Failed to add question';
//     });
//   },
// });

// export const { setLoading, setError } = createQuestionSlice.actions;

// export default createQuestionSlice.reducer;



import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Question {
  question: string;
  options: string[];
}

interface CreateQuestionState {
  loading: boolean;
  error: string | null;
}

const initialState: CreateQuestionState = {
  loading: false,
  error: null,
};

export const addQuestion = createAsyncThunk<string, Question, { state: RootState }>(
  'createQuestion/addQuestion',
  async (newQuestion, { getState }) => {
    try {
      const token = getState().token.value;
      const response = await axios.post<string>('https://qt.organogram.app/questions', newQuestion, {
        headers: {
          Token: token,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw (error as Error).message;
    }
  }
);

export const createQuestionSlice = createSlice({
  name: 'createQuestion',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addQuestion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addQuestion.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to add question';
    });
  },
});

export const { setLoading, setError } = createQuestionSlice.actions;

export default createQuestionSlice.reducer;
