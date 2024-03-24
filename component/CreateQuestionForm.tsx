// // components/CreateQuestionForm.tsx
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAppDispatch } from '../redux/store/hooks';
// import { RootState } from '../redux/store';
// // import { addQuestion } from '../redux/thunks/createQuestionThunks';
// import { createQuestion} from '../redux/thunks/createQuestionThunks';

// const CreateQuestionForm = () => {
//   const dispatch = useAppDispatch();
//   const [newQuestion, setNewQuestion] = useState('');
//   const [newOptions, setNewOptions] = useState<string[]>(['']);

//   const token = useSelector((state: RootState) => state.token.value);

//   const handleAddOption = () => {
//     setNewOptions([...newOptions, '']);
//   };

//   const handleOptionChange = (index: number, value: string) => {
//     const updatedOptions = [...newOptions];
//     updatedOptions[index] = value;
//     setNewOptions(updatedOptions);
//   };

//   const handleRemoveOption = (index: number) => {
//     const updatedOptions = [...newOptions];
//     updatedOptions.splice(index, 1);
//     setNewOptions(updatedOptions);
//   };

//   const handleAddQuestion = () => {
//     const questionData = {
//       question: newQuestion,
//       options: newOptions,
//     };
//     dispatch(createQuestion(questionData));
//     setNewQuestion('');
//     setNewOptions(['']);
//   };

//   return (
//     <div>
//       <h3>Add New Question:</h3>
//       <input type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
//       <h4>Options:</h4>
//       {newOptions.map((option, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             value={option}
//             onChange={(e) => handleOptionChange(index, e.target.value)}
//           />
//           <button onClick={() => handleRemoveOption(index)}>Remove</button>
//         </div>
//       ))}
//       <button onClick={handleAddOption}>Add Option</button>
//       <button onClick={handleAddQuestion}>Add Question</button>
//     </div>
//   );
// };

// export default CreateQuestionForm;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store/hooks';
import { RootState } from '../redux/store';
import { createQuestion } from '../redux/thunks/createQuestionThunks';

const CreateQuestionForm = () => {
  const dispatch = useAppDispatch();
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState<string[]>(['', '', '']);

  const token = useSelector((state: RootState) => state.token.value);

  const handleAddOption = () => {
    if (newOptions.length < 5) { // Check if options are less than 5
      setNewOptions([...newOptions, '']);
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = value;
    setNewOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    if (newOptions.length > 3) { // Check if options are more than 3
      const updatedOptions = [...newOptions];
      updatedOptions.splice(index, 1);
      setNewOptions(updatedOptions);
    }
  };

  const handleAddQuestion = () => {
    const questionData = {
      question: newQuestion,
      options: newOptions,
    };
    dispatch(createQuestion(questionData));
    setNewQuestion('');
    setNewOptions(['', '', '']); // Reset options to the initial state
  };

  return (
    <div>
      <h3>Add New Question:</h3>
      <input type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
      <h4>Options:</h4>
      {newOptions.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveOption(index)} disabled={newOptions.length <= 3}>Remove</button> {/* Disable if options are at minimum */}
        </div>
      ))}
      <button onClick={handleAddOption} disabled={newOptions.length >= 5}>Add Option</button> {/* Disable if options are at maximum */}
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default CreateQuestionForm;
