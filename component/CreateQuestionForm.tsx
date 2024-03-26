
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store/hooks';
import { RootState } from '../redux/store';
import { createQuestion } from '../redux/thunks/createQuestionThunks';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

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
      <Form.Control type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
      <h4>Options:</h4>
      {newOptions.map((option, index) => (
        <div key={index}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <Button variant="danger" onClick={() => handleRemoveOption(index)} disabled={newOptions.length <= 3}>
              Remove
            </Button>
          </InputGroup>
        </div>
      ))}
      <Button variant="primary" onClick={handleAddOption} disabled={newOptions.length >= 5}>
        Add Option
      </Button>
      <Button variant="success" onClick={handleAddQuestion}>
        Add Question
      </Button>
    </div>
  );
};

export default CreateQuestionForm;


// import React, { useState } from 'react';
// import { CDBInput, CDBBtn, CDBContainer, CDBCard, CDBCardBody } from 'cdbreact';
// import { useSelector } from 'react-redux';
// import { useAppDispatch } from '../redux/store/hooks';
// import { RootState } from '../redux/store';
// import { createQuestion } from '../redux/thunks/createQuestionThunks';

// const CreateQuestionForm = () => {
//   const dispatch = useAppDispatch();
//   const [newQuestion, setNewQuestion] = useState('');
//   const [newOptions, setNewOptions] = useState<string[]>(['', '', '']);

//   const token = useSelector((state: RootState) => state.token.value);

//   const handleAddOption = () => {
//     if (newOptions.length < 5) { // Check if options are less than 5
//       setNewOptions([...newOptions, '']);
//     }
//   };

//   const handleOptionChange = (index: number, value: string) => {
//     const updatedOptions = [...newOptions];
//     updatedOptions[index] = value;
//     setNewOptions(updatedOptions);
//   };

//   const handleRemoveOption = (index: number) => {
//     if (newOptions.length > 3) { // Check if options are more than 3
//       const updatedOptions = [...newOptions];
//       updatedOptions.splice(index, 1);
//       setNewOptions(updatedOptions);
//     }
//   };

//   const handleAddQuestion = () => {
//     const questionData = {
//       question: newQuestion,
//       options: newOptions,
//     };
//     dispatch(createQuestion(questionData));
//     setNewQuestion('');
//     setNewOptions(['', '', '']); // Reset options to the initial state
//   };

//   return (
//     <CDBContainer>
//       <CDBCard style={{ width: '30rem' }}>
//         <CDBCardBody className="mx-4">
//           <div className="text-center mt-4 mb-2">
//             <p className="h4">Add New Question:</p>
//           </div>
//           <CDBInput
//             type="text"
//             value={newQuestion}
//             onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNewQuestion(e.target.value)}
//             id="newQuestion"
//           />
//           <div>
//             <h4>Options:</h4>
//             {newOptions.map((option, index) => (
//               <div key={index}>
//                 <CDBInput
//                   type="text"
//                   value={option}
//                   onChange={(e: { target: { value: string; }; }) => handleOptionChange(index, e.target.value)}
//                   id={`option${index + 1}`}
//                 />
//                 <CDBBtn
//                   color="danger"
//                   onClick={() => handleRemoveOption(index)}
//                   disabled={newOptions.length <= 3}
//                   className="mt-3"
//                 >
//                   Remove
//                 </CDBBtn>
//               </div>
//             ))}
//             <CDBBtn
//               color="primary"
//               onClick={handleAddOption}
//               disabled={newOptions.length >= 5}
//               className="mt-3"
//             >
//               Add Option
//             </CDBBtn>
//           </div>
//           <CDBBtn color="success" onClick={handleAddQuestion} className="mt-3 btn-block">
//             Add Question
//           </CDBBtn>
//         </CDBCardBody>
//       </CDBCard>
//     </CDBContainer>
//   );
// };

// export default CreateQuestionForm;
