// UpdateQuestionForm2.tsx
import React, { useState } from 'react';
import { useAppDispatch } from '../redux/store/hooks';
import { updateQuestion} from '../redux/thunks/updateQuestionThunks';
import styled from 'styled-components';
import { StyledDiv } from '@/__style/ui-block.style';

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
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };


  const handleSubmit = () => {
    dispatch(updateQuestion({ id: questionId, question, options }));
    onClose();
  };

  return (
    <StyledContainer>
      <h3>Edit Question:</h3>
      <input 
      type="text" 
      value={question} 
      onChange={handleQuestionChange} 
       style={{
              height:"35px",
              borderRadius:"6px",
            }}
      />
      <h4>Edit Options:</h4>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            style={{
              height:"35px",
              borderRadius:"6px",
            }}
          />
        </div>
      ))}
      <StyledBtns>
      <button onClick={handleSubmit}>Save Changes</button>
      <button onClick={onClose}>Cancel</button>
      </StyledBtns>
    </StyledContainer>
  );
};

export default UpdateQuestionForm2;

const StyledContainer = styled(StyledDiv)`
/* border: 1px solid red; */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledBtns = styled(StyledDiv)`
/* border: 1px solid red; */
margin-top: 8px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
/* column-gap:"6px"; */
padding: 6px 10px;
height: 35px;
border-radius: 8px;
`;


// // UpdateQuestionForm2.tsx
// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
// import { useAppDispatch } from '../redux/store/hooks';
// import { updateQuestion } from '../redux/thunks/updateQuestionThunks';

// interface UpdateQuestionFormProps {
//   questionId: string;
//   initialQuestion: string;
//   initialOptions: string[];
//   onClose: () => void;
// }

// const UpdateQuestionForm2: React.FC<UpdateQuestionFormProps> = ({
//   questionId,
//   initialQuestion,
//   initialOptions,
//   onClose,
// }) => {
//   const dispatch = useAppDispatch();
//   const [question, setQuestion] = useState(initialQuestion);
//   const [options, setOptions] = useState(initialOptions);

//   const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuestion(e.target.value);
//   };

//   const handleOptionChange = (index: number, value: string) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   const handleSubmit = () => {
//     dispatch(updateQuestion({ id: questionId, question, options }));
//     onClose();
//   };

//   return (
//     <div>
//       <h3>Edit Question:</h3>
//       <Form>
//         <FormGroup>
//           <Label for="question">Question:</Label>
//           <Input type="text" id="question" value={question} onChange={handleQuestionChange} />
//         </FormGroup>
//         <h4>Edit Options:</h4>
//         {options.map((option, index) => (
//           <div key={index}>
//             <FormGroup>
//               <Label for={`option${index + 1}`}>Option {index + 1}:</Label>
//               <Input
//                 type="text"
//                 id={`option${index + 1}`}
//                 value={option}
//                 onChange={(e) => handleOptionChange(index, e.target.value)}
//               />
//             </FormGroup>
//           </div>
//         ))}
//         <Button color="primary" onClick={handleSubmit}>Save Changes</Button>{' '}
//         <Button color="secondary" onClick={onClose}>Cancel</Button>
//       </Form>
//     </div>
//   );
// };

// export default UpdateQuestionForm2;
