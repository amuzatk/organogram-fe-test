// import React, { useState } from 'react';
// import axios from 'axios';

// const AddQuestion: React.FC = () => {
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState<string[]>(['', '', '']);

//   const handleAddOption = () => {
//     setOptions(prevOptions => [...prevOptions, '']);
//   };

//   const handleOptionChange = (index: number, value: string) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

// const handleSubmit = async () => {
//     try {
//       // Retrieve token from local storage
//       const token = localStorage.getItem('token');
  
//       const response = await axios.post(
//         'https://qt.organogram.app/questions',
//         {
//           question,
//           options
//         },
//         {
//           headers: {
//             Token: token // Assign token to request header
//           }
//         }
//       );
//       console.log('New question created with ID:', response.data);
//       // Reset form fields
//       setQuestion('');
//       setOptions(['', '', '']);
//     } catch (error) {
//       console.error('Error adding question:', error);
//     }
//   };
  
//   return (
//     <div>
//       <h2>Add New Question</h2>
//       <div>
//         <label>Question:</label>
//         <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
//       </div>
//       <div>
//         <label>Options:</label>
//         {options.map((option, index) => (
//           <div key={index}>
//             <input type="text" value={option} onChange={e => handleOptionChange(index, e.target.value)} />
//           </div>
//         ))}
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default AddQuestion;




import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch } from '../redux/store/hooks';
import { RootState } from '../redux/store';
import { setQuestion, addOption, clearFormData, setOptions } from '../redux/slices/questionFormSlice';
import { addQuestion } from '../redux/thunks/questionFormThunks';

const AddQuestion: React.FC = () => {
  const dispatch = useAppDispatch();
  const { formData } = useSelector((state: RootState) => state.questionForm);
  // const [localOptions, setLocalOptions] = useState<string[]>(formData.options);
  const [localOptions, setLocalOptions] = useState<string[]>(formData.options);

  const handleAddOption = () => {
    const updatedOptions = [...localOptions, ''];
    setLocalOptions(updatedOptions);
    dispatch(addOption('')); // Dispatch addOption with an empty string to add a new option
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...localOptions];
    updatedOptions[index] = value;
    setLocalOptions(updatedOptions);
    dispatch(addOption(value)); // Dispatch addOption with the updated value
  };

  // const handleSubmit = async () => {
  //   try {
  //     await dispatch(addQuestion());
  //     dispatch(clearFormData()); // Clear Redux state after submitting
  //     setLocalOptions([]); // Clear local options after submitting
  //   } catch (error) {
  //     console.error('Error adding question:', error);
  //   }
  // };

  // const handleSubmit = async () => {
  //   try {
  //     await dispatch(addQuestion());
  //     dispatch(clearFormData()); // Clear Redux state after submitting
  //     dispatch(setOptions([])); // Clear options in Redux state
  //     setLocalOptions([]); // Clear local options after submitting
  //   } catch (error) {
  //     console.error('Error adding question:', error);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      dispatch(addQuestion());
      dispatch(clearFormData()); // Clear Redux state after submitting
      dispatch(setOptions([])); // Clear options in Redux state
      setLocalOptions([]); // Clear local options after submitting
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };
  
  

  return (
    <div>
      <h2>Add New Question</h2>
      <div>
        <label>Question:</label>
        <input type="text" value={formData.question} onChange={(e) => dispatch(setQuestion(e.target.value))} />
      </div>
      <div>
        <label>Options:</label>
        {localOptions.map((option, index) => (
          <div key={index}>
            <input type="text" value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
          </div>
        ))}
        <button onClick={handleAddOption}>Add Option</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddQuestion;




// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { useAppDispatch } from '../redux/store/hooks';
// import { setQuestion, addOption, clearFormData } from '../redux/slices/questionFormSlice';
// import { addQuestion } from '../redux/thunks/questionFormThunks';

// const AddQuestion: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { formData } = useSelector((state: RootState) => state.questionForm);
//   const [localOptions, setLocalOptions] = useState<string[]>(['', '', '']);

//   const handleAddOption = () => {
//     setLocalOptions(prevOptions => [...prevOptions, '']);
//   };

//   const handleOptionChange = (index: number, value: string) => {
//     const newOptions = [...localOptions];
//     newOptions[index] = value;
//     setLocalOptions(newOptions);
//   };

//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await dispatch(addQuestion());
//       dispatch(clearFormData());
//     } catch (error) {
//       console.error('Error adding question:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Question</h2>
//       <div>
//         <label>Question:</label>
//         <input type="text" value={formData.question} onChange={(e) => dispatch(setQuestion(e.target.value))} />
//       </div>
//       <div>
//         <label>Options:</label>
//         {localOptions.map((option, index) => (
//           <div key={index}>
//             <input type="text" value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
//           </div>
//         ))}
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default AddQuestion;
