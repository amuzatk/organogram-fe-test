// // Home.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import TokenForm from '@/component/tokenForm';
// import { RootState } from '@/redux/store';
// import { fetchQuestions } from '../redux/thunks/questionsThunks';
// import { useAppDispatch } from '../redux/store/hooks';
// import CreateQuestionForm from '@/component/CreateQuestionForm';
// import { deleteQuestion } from '@/redux/thunks/deleteQuestionThunks';
// import ReactModal from 'react-modal';
// import CreateQuestionModal from '@/component/modals/CreateQuestionModal';
// import UpdateQuestionModal from '@/component/modals/EditQuestionModal';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const token = useSelector((state: RootState) => state.token.value);
//   const questions = useSelector((state: RootState) => state.questions.questions);
//   const loading = useSelector((state: RootState) => state.questions.loading);
//   const [editQuestionId, setEditQuestionId] = useState<string | null>(null);
//   const [isCreateQuestionClicked, setIsCreateQuestionClicked] = useState<boolean>(false);

//   const handleEditQuestion = (questionId: string) => {
//     setEditQuestionId(questionId);
//   };

//   const handleDelete = (questionId: string) => {
//     dispatch(deleteQuestion(questionId));
//   };

//   const handleCloseEditForm = () => {
//     setEditQuestionId(null);
//   };

//   const handleCreateQuestionClick = () => {
//     setIsCreateQuestionClicked(true);
//   };

//   useEffect(() => {
//     if (token) {
//       dispatch(fetchQuestions());
//     }
//   }, [dispatch, token]);

//   return (
//     <div>
//       {!token ? (
//         <TokenForm />
//       ) : (
//         <div>
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div>
//               <button onClick={handleCreateQuestionClick}>Create Question</button>
//               <h3>Questions Data:</h3>
//               <ul>
//                 {questions.map((question) => (
//                   <div key={question.id}>
//                     <p>{`${question.question}`}</p>
//                     <ul>
//                       {question.options.map((option, optionIndex) => (
//                         <li key={optionIndex}>
//                           <input
//                             type="checkbox"
//                             value={option}
//                           />
//                           <label>{option}</label>
//                         </li>
//                       ))}
//                     </ul>
//                     <button onClick={() => handleEditQuestion(question.id)}>Edit</button>
//                     <button onClick={() => handleDelete(question.id)}>Delete</button>
//                   </div>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//       {editQuestionId && questions.find((q) => q.id === editQuestionId) && (
//         <UpdateQuestionModal
//           isOpen={editQuestionId !== null}
//           onRequestClose={handleCloseEditForm}
//           questionId={editQuestionId}
//           initialQuestion={(questions.find((q) => q.id === editQuestionId) || {}).question || ''}
//           initialOptions={(questions.find((q) => q.id === editQuestionId) || {}).options || []}
//         />
//       )}

//       <CreateQuestionModal isOpen={isCreateQuestionClicked} onRequestClose={() => setIsCreateQuestionClicked(false)}>
//         <CreateQuestionForm />
//       </CreateQuestionModal>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TokenForm from '@/component/tokenForm';
import { RootState } from '@/redux/store';
import { fetchQuestions } from '../redux/thunks/questionsThunks';
import { useAppDispatch } from '../redux/store/hooks';
import CreateQuestionForm from '@/component/CreateQuestionForm';
import { deleteQuestion } from '@/redux/thunks/deleteQuestionThunks';
import ReactModal from 'react-modal';
import CreateQuestionModal from '@/component/modals/CreateQuestionModal';
import UpdateQuestionModal from '@/component/modals/EditQuestionModal';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { StyledDiv, StyledFlex } from '@/__style/ui-block.style';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.token.value);
  const questions = useSelector((state: RootState) => state.questions.questions);
  const loading = useSelector((state: RootState) => state.questions.loading);
  const [editQuestionId, setEditQuestionId] = useState<string | null>(null);
  const [isCreateQuestionClicked, setIsCreateQuestionClicked] = useState<boolean>(false);

  const handleEditQuestion = (questionId: string) => {
    setEditQuestionId(questionId);
  };

  const handleDelete = (questionId: string) => {
    dispatch(deleteQuestion(questionId));
  };

  const handleCloseEditForm = () => {
    setEditQuestionId(null);
  };

  const handleCreateQuestionClick = () => {
    setIsCreateQuestionClicked(true);
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchQuestions());
    }
  }, [dispatch, token]);

  return (
    <StyledContainer>
      <div>
        {!token ? (
          <TokenForm />
        ) : (
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <button onClick={handleCreateQuestionClick}>Create Question</button>
                <h3>Questions Data:</h3>
                {questions.map((question) => (
                  <Card key={question.id} style={{ width: '18rem', margin: '1rem 0' }}>
                    <Card.Body>
                      <Card.Title>{question.question}</Card.Title>
                      <ListGroup variant="flush">
                        {question.options.map((option, optionIndex) => (
                          <ListGroup.Item key={optionIndex}>
                            <input type="checkbox" value={option} />
                            <span>{option}</span>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                      <Button variant="primary" onClick={() => handleEditQuestion(question.id)}>Edit</Button>
                      <Button variant="danger" onClick={() => handleDelete(question.id)}>Delete</Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
        {editQuestionId && questions.find((q) => q.id === editQuestionId) && (
          <UpdateQuestionModal
            isOpen={editQuestionId !== null}
            onRequestClose={handleCloseEditForm}
            questionId={editQuestionId}
            initialQuestion={(questions.find((q) => q.id === editQuestionId) || {}).question || ''}
            initialOptions={(questions.find((q) => q.id === editQuestionId) || {}).options || []}
          />
        )}

        <CreateQuestionModal isOpen={isCreateQuestionClicked} onRequestClose={() => setIsCreateQuestionClicked(false)}>
          <CreateQuestionForm />
        </CreateQuestionModal>
      </div>
    </StyledContainer>
  );
};

export default Home;
const StyledContainer = styled(StyledFlex)`
background-color: lightblue;
justify-content: center;
align-items: center;
min-width: 800px;
flex-direction: row;
min-height: 100vh;
overflow-y: visible;
`;
