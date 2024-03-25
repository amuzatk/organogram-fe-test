// redux/slices/questionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Question {
  id: string;
  question: string;
  options: string[];
}

interface QuestionState {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
};

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setQuestions, setLoading, setError } = questionSlice.actions;

export default questionSlice.reducer;



// // redux/slices/questionSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

// interface Question {
//   id: string; // Change to string type for UUID
//   question: string;
//   options: string[];
// }

// interface QuestionState {
//   questions: Question[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: QuestionState = {
//   questions: [],
//   loading: false,
//   error: null,
// };

// export const questionSlice = createSlice({
//   name: 'questions',
//   initialState,
//   reducers: {
//     setQuestions: (state, action: PayloadAction<Question[]>) => {
//       state.questions = action.payload.map((question) => ({ ...question, id: uuidv4() })); // Generate UUID for each question
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setQuestions, setLoading, setError } = questionSlice.actions;

// export default questionSlice.reducer;
