
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useAppDispatch } from '../redux/store/hooks';
// import { RootState } from '../redux/store';
// import { createQuestion } from '../redux/thunks/createQuestionThunks';
// import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

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
//     <div>
//       <h3>Add New Question:</h3>
//       <Form.Control type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
//       <h4>Options:</h4>
//       {newOptions.map((option, index) => (
//         <div key={index}>
//           <InputGroup className="mb-3">
//             <FormControl
//               placeholder={`Option ${index + 1}`}
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//             <Button variant="danger" onClick={() => handleRemoveOption(index)} disabled={newOptions.length <= 3}>
//               Remove
//             </Button>
//           </InputGroup>
//         </div>
//       ))}
//       <Button variant="primary" onClick={handleAddOption} disabled={newOptions.length >= 5}>
//         Add Option
//       </Button>
//       <Button variant="success" onClick={handleAddQuestion}>
//         Add Question
//       </Button>
//     </div>
//   );
// };

// export default CreateQuestionForm;


import React, { useState } from 'react';
import { FormGroup, Input, Button, Container, Card, CardBody } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store/hooks';
import { RootState } from '../redux/store';
import { createQuestion } from '../redux/thunks/createQuestionThunks';
import styled from 'styled-components';
import { StyledFlex } from '@/__style/ui-block.style';

const CreateQuestionForm = () => {
  const dispatch = useAppDispatch();
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState<string[]>(['', '', '']);

  const token = useSelector((state: RootState) => state.token.value);

  const handleAddOption = () => {
    if (newOptions.length < 5) {
      setNewOptions([...newOptions, '']);
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = value;
    setNewOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    if (newOptions.length > 3) {
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
    setNewOptions(['', '', '']);
  };

  return (
    <Container
    style={{ 
      // width: '30rem'
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:"100%"
     }}
    >
      <Card >
        <CardBody >
          <div >
            <p>Add New Question:</p>
          </div>
          <Input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            id="newQuestion"
          />
          <div>
            <h4>Options:</h4>
            {newOptions.map((option, index) => (
              <StyledFlex 
              fDirection='row'
              justify='center'
              align='center'
              g='5px'
              key={index}>
                <Input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  id={`option${index + 1}`}
                />
                <Button
                  onClick={() => handleRemoveOption(index)}
                  disabled={newOptions.length <= 3}
                >
                  Remove
                </Button>
              </StyledFlex>
            ))}
            <StyledBt
              // color="primary"
              onClick={handleAddOption}
              disabled={newOptions.length >= 5}
             
            >
              Add Option
            </StyledBt>
          </div>
          <StyledBt color="success" onClick={handleAddQuestion} >
            Add Question
          </StyledBt>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CreateQuestionForm;

const StyledBt = styled(Button)`
border: 1px solid grey;
margin-top: 5px;
height: 30px;
padding: 5px 10px;
border-radius: 5px;
`;