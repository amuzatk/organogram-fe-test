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
// import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
// import { StyledDiv, StyledFlex } from '@/__style/ui-block.style';
// import styled from 'styled-components';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const token = useSelector((state: RootState) => state.token.value);
//   const questions = useSelector((state: RootState) => state.questions.questions);
//   const loading = useSelector((state: RootState) => state.questions.loading);
//   const [editQuestionId, setEditQuestionId] = useState<string | null>(null);
//   const [isCreateQuestionClicked, setIsCreateQuestionClicked] = useState<boolean>(false);
//   const [deleteConfirmationId, setDeleteConfirmationId] = useState<string | null>(null);

//   const handleEditQuestion = (questionId: string) => {
//     setEditQuestionId(questionId);
//   };

//   // const handleDelete = (questionId: string) => {
//   //   dispatch(deleteQuestion(questionId));
//   // };

//   const handleDelete = (questionId: string) => {
//     setDeleteConfirmationId(questionId);
//   };
//   const handleConfirmDelete = () => {
//     if (deleteConfirmationId) {
//       dispatch(deleteQuestion(deleteConfirmationId));
//       setDeleteConfirmationId(null);
//     }
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
//     <StyledContainer>
//       <div>
//         {!token ? (
//           <TokenForm />
//         ) : (
//           <div>
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <div>
//                 <button onClick={handleCreateQuestionClick}>Create Question</button>
//                 <h3>Questions Data:</h3>
//                 {questions.map((question) => (
//                   <Card key={question.id} style={{ width: '18rem', margin: '1rem 0' }}>
//                     <Card.Body>
//                       <Card.Title>{question.question}</Card.Title>
//                       <ListGroup variant="flush">
//                         {question.options.map((option, optionIndex) => (
//                           <ListGroup.Item key={optionIndex}>
//                             <input type="checkbox" value={option} />
//                             <span>{option}</span>
//                           </ListGroup.Item>
//                         ))}
//                       </ListGroup>
//                       <Button variant="primary" onClick={() => handleEditQuestion(question.id)}>Edit</Button>
//                       <Button variant="danger" onClick={() => handleDelete(question.id)}>Delete</Button>
//                     </Card.Body>
//                   </Card>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//         {editQuestionId && questions.find((q) => q.id === editQuestionId) && (
//           <UpdateQuestionModal
//             isOpen={editQuestionId !== null}
//             onRequestClose={handleCloseEditForm}
//             questionId={editQuestionId}
//             initialQuestion={(questions.find((q) => q.id === editQuestionId) || {}).question || ''}
//             initialOptions={(questions.find((q) => q.id === editQuestionId) || {}).options || []}
//           />
//         )}

//         <CreateQuestionModal isOpen={isCreateQuestionClicked} onRequestClose={() => setIsCreateQuestionClicked(false)}>
//           <CreateQuestionForm />
//         </CreateQuestionModal>


//         <Modal show={!!deleteConfirmationId} onHide={() => setDeleteConfirmationId(null)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Confirm Delete</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Are you sure you want to delete this question?</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setDeleteConfirmationId(null)}>
//               Cancel
//             </Button>
//             <Button variant="danger" onClick={handleConfirmDelete}>
//               Delete
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </StyledContainer>
//   );
// };

// export default Home;
// const StyledContainer = styled(StyledFlex)`
// background-color: lightblue;
// justify-content: center;
// align-items: center;
// min-width: 800px;
// flex-direction: row;
// min-height: 100vh;
// overflow-y: visible;
// `;



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
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { StyledDiv, StyledFlex, StyledGrid } from '@/__style/ui-block.style';
import styled from 'styled-components';
import QuizModal from '@/component/QuizModal';

const Home = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.token.value);
  const questions = useSelector((state: RootState) => state.questions.questions);
  const loading = useSelector((state: RootState) => state.questions.loading);
  const [editQuestionId, setEditQuestionId] = useState<string | null>(null);
  const [isCreateQuestionClicked, setIsCreateQuestionClicked] = useState<boolean>(false);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<string | null>(null);

  const handleEditQuestion = (questionId: string) => {
    setEditQuestionId(questionId);
  };

  const handleDelete = (questionId: string) => {
    setDeleteConfirmationId(questionId);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmationId) {
      dispatch(deleteQuestion(deleteConfirmationId));
      setDeleteConfirmationId(null);
    }
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
      <StyledMain>
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
          //         <StyledContainer2
          //         cg="20px"
          //         justify="enter"
          //         align="center"
          //         // gtc="minmax(200px, 300px) minmax(120px, 200px)  minmax(120px, 200px) 120px 100px  80px  80px 50px"
          // // gtc="repeat(auto-fit, minmax(400px, 1fr))"
          // gtc="repeat(3, 1fr)"
          //        >
  <QuizModal
    key={question.id}
    question={question.question}
    options={question.options}
    handleEditQuestion={() => handleEditQuestion(question.id)}
    handleDelete={() => handleDelete(question.id)}
  />
  // </StyledContainer2>
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

        <Modal show={!!deleteConfirmationId} onHide={() => setDeleteConfirmationId(null)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this question?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDeleteConfirmationId(null)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </StyledMain>
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
const StyledContainer2 = styled(StyledGrid)`
  /* grid-template-columns: repeat(3, 1fr); */
  padding: 13px 24px;
  background: var(--background-primary_2);
  /* position: relative; */
  /* border-bottom: 1px solid var(--border); */
`;
const StyledMain = styled(StyledDiv)`
border: 1px solid red;
padding-top: 60px;
`;