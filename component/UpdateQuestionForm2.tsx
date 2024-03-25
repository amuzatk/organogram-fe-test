// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useAppDispatch } from '../redux/store/hooks';
// import { updateQuestionAsync } from '../redux/thunks/updateQuestionThunks';

// interface UpdateQuestionFormProps {
//     questionId: string;
//     initialQuestion: string;
//     initialOptions: string[];
//     onClose: () => void;
//   }
  
//   const UpdateQuestionForm2: React.FC<UpdateQuestionFormProps> = ({
//     questionId,
//     initialQuestion,
//     initialOptions,
//     onClose,
//   }) => {
//   const dispatch = useAppDispatch();
//   const [question, setQuestion] = useState(initialQuestion);
//   const [options, setOptions] = useState(initialOptions);

//   console.log(questionId,'questionID @ edit form=')
//   const handleQuestionChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
//     setQuestion(e.target.value);
//   };

//   const handleOptionChange = (index: number, value: string) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   const handleSubmit = () => {
//     // Dispatch action to update question
//     dispatch(updateQuestionAsync({ id: questionId, question, options }));
//     onClose(); // Close the form after submitting
//   };

//   return (
//     <div>
//       <h3>Edit Question:</h3>
//       <input type="text" value={question} onChange={handleQuestionChange} />
//       <h4>Edit Options:</h4>
//       {options.map((option, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             value={option}
//             onChange={(e) => handleOptionChange(index, e.target.value)}
//           />
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Save Changes</button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// };

// export default UpdateQuestionForm2;


// UpdateQuestionForm2.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../redux/store/hooks';
import { updateQuestionAsync } from '../redux/thunks/updateQuestionThunks';
import { fetchQuestions } from '@/redux/thunks/questionsThunks';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '@/redux/store';

interface UpdateQuestionFormProps {
  questionId: string;
  initialQuestion: string;
  initialOptions: string[];
  onClose: () => void;
}

const UpdateQuestionForm2: React.FC<UpdateQuestionFormProps> = ({
  questionId,
  initialQuestion,
  initialOptions,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState(initialQuestion);
  const [options, setOptions] = useState(initialOptions);
// console.log(questionId,'questionId=== form2')
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };


  const handleSubmit = () => {
    // console.log({ id: questionId, question, options }); // Logging the payload
    dispatch(updateQuestionAsync({ id: questionId, question, options }));
    // dispatch(fetchQuestions)
    onClose();
  };

  return (
    <div>
      <h3>Edit Question:</h3>
      <input type="text" value={question} onChange={handleQuestionChange} />
      <h4>Edit Options:</h4>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Save Changes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default UpdateQuestionForm2;
