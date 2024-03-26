// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import TokenForm from '@/component/tokenForm';
// import { RootState } from '@/redux/store';
// import { fetchQuestions } from '../redux/thunks/questionsThunks';
// import { useAppDispatch } from '../redux/store/hooks';
// import CreateQuestionForm from '@/component/CreateQuestionForm';
// import { deleteQuestion } from '@/redux/thunks/deleteQuestionThunks';
// import CreateQuestionModal from '@/component/modals/CreateQuestionModal';
// import UpdateQuestionModal from '@/component/modals/EditQuestionModal';
// import { Button, Modal } from 'react-bootstrap';
// import { StyledDiv, StyledFlex, StyledGrid } from '@/__style/ui-block.style';
// import styled from 'styled-components';
// import QuizModal from '@/component/QuizModal';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const token = useSelector((state: RootState) => state.token.value);
//   const questions = useSelector((state: RootState) => state.questions.questions);
//   const loading = useSelector((state: RootState) => state.questions.loading);
//   const [editQuestionId, setEditQuestionId] = useState<string | null>(null);
//   const [isCreateQuestionClicked, setIsCreateQuestionClicked] = useState<boolean>(false);
//   const [deleteConfirmationId, setDeleteConfirmationId] = useState<string | null>(null);
//   const [indexCounter, setIndexCounter] = useState(0);

//   const handleEditQuestion = (questionId: string) => {
//     setEditQuestionId(questionId);
//   };

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
//       <StyledMain>
//         {!token ? (
//           <TokenForm />
//         ) : (
//           <div>
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <div>
//                 <StyledBtn onClick={handleCreateQuestionClick}>Create Question</StyledBtn>
//                 <h3>Questions Data:</h3>
//                 {questions.map((question, index) => (

//   <QuizModal
//     key={question.id}
//     question={question.question}
//     options={question.options}
//     handleEditQuestion={() => handleEditQuestion(question.id)}
//     handleDelete={() => handleDelete(question.id)}
//     questionNumber={index + indexCounter + 1}
//   />
// ))}
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
//       </StyledMain>
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
// const StyledMain = styled(StyledDiv)`
// padding-top: 60px;
// `;

// const StyledBtn = styled.button`
// border: 1px solid grey;
// height: 50px;
// padding: 15px;
// font-size: 16px;
// border-radius: 8px;
// cursor: pointer;
// `;



import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TokenForm from '@/component/tokenForm';
import { RootState } from '@/redux/store';
import { fetchQuestions } from '../redux/thunks/questionsThunks';
import { useAppDispatch } from '../redux/store/hooks';
import CreateQuestionForm from '@/component/CreateQuestionForm';
import { deleteQuestion } from '@/redux/thunks/deleteQuestionThunks';
import CreateQuestionModal from '@/component/modals/CreateQuestionModal';
import UpdateQuestionModal from '@/component/modals/EditQuestionModal';
import { Button, Modal } from 'react-bootstrap';
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
  const [indexCounter, setIndexCounter] = useState(0);

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
                <StyledBtn onClick={handleCreateQuestionClick}>Create Question</StyledBtn>
                <h3>Questions Data:</h3>
                {questions.length === 0 ? (
                  <p>Compose your questions and multi-choice options</p>
                ) : (
                  questions.map((question, index) => (
                    <QuizModal
                      key={question.id}
                      question={question.question}
                      options={question.options}
                      handleEditQuestion={() => handleEditQuestion(question.id)}
                      handleDelete={() => handleDelete(question.id)}
                      questionNumber={index + indexCounter + 1}
                    />
                  ))
                )}
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
const StyledMain = styled(StyledDiv)`
padding-top: 60px;
`;

const StyledBtn = styled.button`
border: 1px solid grey;
height: 50px;
padding: 15px;
font-size: 16px;
border-radius: 8px;
cursor: pointer;
`;