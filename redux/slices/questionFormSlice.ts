// // redux/slices/questionFormSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // interface QuestionFormData {
// //   question: string;
// //   options: string[];
// // }
// interface QuestionFormData {
//   id?: string; // Optional id property
//   question: string;
//   options: string[];
// }


// interface QuestionFormState {
//   formData: QuestionFormData;
// }

// const initialState: QuestionFormState = {
//   formData: {
//     question: '',
//     options: [],
//   },
// };

// export const questionFormSlice = createSlice({
//   name: 'questionForm',
//   initialState,
//   reducers: {
//     setQuestion: (state, action: PayloadAction<string>) => {
//       state.formData.question = action.payload;
//     },
//     addOption: (state, action: PayloadAction<string>) => {
//       state.formData.options.push(action.payload);
//     },
//     removeOption: (state, action: PayloadAction<number>) => {
//       state.formData.options.splice(action.payload, 1);
//     },
//     clearFormData: (state) => {
//       state.formData.question = '';
//       state.formData.options = [];
//     },
//   },
// });

// export const { setQuestion, addOption, removeOption, clearFormData } = questionFormSlice.actions;

// export default questionFormSlice.reducer;



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuestionFormData {
  id?: string; // Optional id property
  question: string;
  options: string[];
}

interface QuestionFormState {
  formData: QuestionFormData;
}

const initialState: QuestionFormState = {
  formData: {
    question: '',
    options: [],
  },
};

export const questionFormSlice = createSlice({
  name: 'questionForm',
  initialState,
  reducers: {
    setQuestion: (state, action: PayloadAction<string>) => {
      state.formData.question = action.payload;
    },
    addOption: (state, action: PayloadAction<string>) => {
      state.formData.options.push(action.payload);
    },
    removeOption: (state, action: PayloadAction<number>) => {
      state.formData.options.splice(action.payload, 1);
    },
    clearFormData: (state) => {
      state.formData.question = '';
      state.formData.options = [];
    },
    setOptions: (state, action: PayloadAction<string[]>) => {
      state.formData.options = action.payload;
    },
  },
});

export const { setQuestion, addOption, removeOption, clearFormData, setOptions } = questionFormSlice.actions;

export default questionFormSlice.reducer;
