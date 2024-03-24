// // components/AddQuestionForm.tsx
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useAppDispatch } from '../redux/store/hooks';
// import { RootState } from '../redux/store';
// import { setQuestion, addOption, removeOption } from '../redux/slices/questionFormSlice';
// import { addQuestion, updateQuestion } from '../redux/thunks/questionFormThunks';

// const AddQuestionForm = () => {
//   const dispatch = useAppDispatch();
//   const { formData } = useSelector((state: RootState) => state.questionForm);

//   const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(setQuestion(e.target.value));
//   };

// //   const handleOptionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
// //     const newOptions = [...formData.options];
// //     newOptions[index] = e.target.value;
// //     dispatch(addOption(newOptions));
// //   };

//   const handleOptionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(addOption(e.target.value)); // Dispatch addOption with a single string value
//   };
  

//   const handleAddOption = () => {
//     dispatch(addOption(''));
//   };

//   const handleRemoveOption = (index: number) => {
//     dispatch(removeOption(index));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.question && formData.options.length >= 3 && formData.options.length <= 5) {
//       if (formData.id) {
//         dispatch(updateQuestion(formData.id));
//       } else {
//         dispatch(addQuestion());
//       }
//     }
//   };

//   return (
//     <div>
//       <h3>Add/Edit Question</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Question:</label>
//         <input type="text" value={formData.question} onChange={handleQuestionChange} />
//         <label>Options:</label>
//         {formData.options.map((option, index) => (
//           <div key={index}>
//             <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
//             <button type="button" onClick={() => handleRemoveOption(index)} disabled={formData.options.length <= 3}>
//               Remove
//             </button>
//           </div>
//         ))}
//         <button type="button" onClick={handleAddOption} disabled={formData.options.length >= 5}>
//           Add Option
//         </button>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddQuestionForm;


// components/AddQuestionForm.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store/hooks';
import { RootState } from '../redux/store';
import { setQuestion, addOption, removeOption } from '../redux/slices/questionFormSlice';
import { addQuestion, updateQuestion } from '../redux/thunks/questionFormThunks';

const AddQuestionForm = () => {
  const dispatch = useAppDispatch();
  const { formData } = useSelector((state: RootState) => state.questionForm);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuestion(e.target.value));
  };

  const handleOptionChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = [...formData.options];
    newOptions[index] = e.target.value;
    // dispatch(addOption(newOptions));
  };

  const handleAddOption = () => {
    if (formData.options.length < 5) {
      dispatch(addOption(''));
    }
  };

  const handleRemoveOption = (index: number) => {
    dispatch(removeOption(index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.question && formData.options.length >= 3 && formData.options.length <= 5) {
      if (formData.id) {
        dispatch(updateQuestion(formData.id));
      } else {
        dispatch(addQuestion());
      }
    }
  };

  return (
    <div>
      <h3>Add/Edit Question</h3>
      <form onSubmit={handleSubmit}>
        <label>Question:</label>
        <input type="text" value={formData.question} onChange={handleQuestionChange} />
        <label>Options:</label>
        {formData.options.map((option, index) => (
          <div key={index}>
            <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)} />
            <button type="button" onClick={() => handleRemoveOption(index)} disabled={formData.options.length <= 3}>
              Remove
            </button>
          </div>
        ))}
        {formData.options.length < 5 && (
          <button type="button" onClick={handleAddOption}>
            Add Option
          </button>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddQuestionForm;
