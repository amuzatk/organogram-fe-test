// Home.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TokenForm from '@/component/tokenForm';
import { RootState } from '@/redux/store';
import { fetchQuestions } from '../redux/thunks/questionsThunks';
import { useAppDispatch } from '../redux/store/hooks';
import CreateQuestionForm from '@/component/CreateQuestionForm';
import UpdateQuestionForm2 from '@/component/UpdateQuestionForm2';
import { deleteQuestion } from '@/redux/thunks/deleteQuestionThunks';
import ReactModal from 'react-modal';
import CreateQuestionModal from '@/component/modals/CreateQuestionModal';


const Home = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.token.value);
  const questions = useSelector((state: RootState) => state.questions.questions);
  const loading = useSelector((state: RootState) => state.questions.loading);
  const [editQuestionId, setEditQuestionId] = useState<string | null>(null); // Define type explicitly
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
              <ul>
                {questions.map((question) => (
                  <div key={question.id}>
                    <p>{`${question.question}`}</p>
                    <ul>
                      {question.options.map((option, optionIndex) => (
                        <li key={optionIndex}>
                          <input
                            type="checkbox"
                            value={option}
                            // Implement checkbox logic
                          />
                          <label>{option}</label>
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => handleEditQuestion(question.id)}>Edit</button>
                    <button onClick={() => handleDelete(question.id)}>Delete</button>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {editQuestionId && questions.find((q) => q.id === editQuestionId) && (
        <ReactModal isOpen={editQuestionId !== null} onRequestClose={handleCloseEditForm}>
          <UpdateQuestionForm2
            questionId={editQuestionId}
            initialQuestion={(questions.find((q) => q.id === editQuestionId) || {}).question || ''}
            initialOptions={(questions.find((q) => q.id === editQuestionId) || {}).options || []}
            onClose={handleCloseEditForm}
          />
        </ReactModal>
      )}

      <CreateQuestionModal isOpen={isCreateQuestionClicked} onRequestClose={() => setIsCreateQuestionClicked(false)}>
        <CreateQuestionForm />
      </CreateQuestionModal>
    </div>
  );
};

export default Home;
