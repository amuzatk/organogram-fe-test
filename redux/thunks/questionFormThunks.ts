// // redux/thunks/questionFormThunks.ts
// import { AppThunk } from '../store';
// import axios from 'axios';
// import { clearFormData } from '../slices/questionFormSlice';
// import { fetchQuestions } from './questionsThunks';
// import { RootState } from '../store';

// export const addQuestion = (): AppThunk => async (dispatch, getState) => {
//   try {
//     const { question, options } = (getState() as RootState).questionForm.formData;
//     const token = (getState() as RootState).token.value;
    
//     await axios.post('https://qt.organogram.app/questions', { question, options }, {
//       headers: {
//         Token: token,
//         'Content-Type': 'application/json'
//       }
//     });

//     dispatch(fetchQuestions());
//     dispatch(clearFormData());
//   } catch (error) {
//     // Handle error
//   }
// };

// export const updateQuestion = (questionId: string): AppThunk => async (dispatch, getState) => {
//   try {
//     const { question, options } = (getState() as RootState).questionForm.formData;
//     const token = (getState() as RootState).token.value;
    
//     await axios.put(`https://qt.organogram.app/questions/${questionId}`, { question, options }, {
//       headers: {
//         Token: token,
//         'Content-Type': 'application/json'
//       }
//     });

//     dispatch(fetchQuestions());
//     dispatch(clearFormData());
//   } catch (error) {
//     // Handle error
//   }
// };


import { AppThunk } from '../store';
import axios from 'axios';
import { clearFormData } from '../slices/questionFormSlice';
import { fetchQuestions } from './questionsThunks';
import { RootState } from '../store';

export const addQuestion = (): AppThunk => async (dispatch, getState) => {
  try {
    const { question, options } = (getState() as RootState).questionForm.formData;
    const token = (getState() as RootState).token.value;
    
    await axios.post('https://qt.organogram.app/questions', { question, options }, {
      headers: {
        Token: token,
        'Content-Type': 'application/json'
      }
    });

    dispatch(fetchQuestions());
    dispatch(clearFormData());
  } catch (error) {
    console.error('Error adding question:', error);
  }
};

export const updateQuestion = (questionId: string): AppThunk => async (dispatch, getState) => {
  try {
    const { question, options } = (getState() as RootState).questionForm.formData;
    const token = (getState() as RootState).token.value;
    
    await axios.put(`https://qt.organogram.app/questions/${questionId}`, { question, options }, {
      headers: {
        Token: token,
        'Content-Type': 'application/json'
      }
    });

    dispatch(fetchQuestions());
    dispatch(clearFormData());
  } catch (error) {
    console.error('Error updating question:', error);
  }
};
