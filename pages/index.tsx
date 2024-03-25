// // Home.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import TokenForm from '@/component/tokenForm';
// import { RootState } from '@/redux/store';
// import { fetchQuestions } from '../redux/thunks/questionsThunks';
// import { useAppDispatch } from '../redux/store/hooks';
// import CreateQuestionForm from '@/component/CreateQuestionForm';
// // import UpdateQuestionForm from '@/component/UpdateQuestionForm';
// import UpdateQuestionForm2 from '@/component/UpdateQuestionForm2';

// const Home = () => {
//   const dispatch = useAppDispatch();
//   const token = useSelector((state: RootState) => state.token.value);
//   const questions = useSelector((state: RootState) => state.questions.questions);
//   const loading = useSelector((state: RootState) => state.questions.loading);
//   // const [editQuestionId, setEditQuestionId] = useState(null);
//   const [editQuestionId, setEditQuestionId] = useState<string | null>(null); // Define type explicitly

//   console.log(questions, 'main question array')
//   // const handleEditQuestion = (questionId) => {
//   //   setEditQuestionId(questionId);
//   // };
  
//   const handleEditQuestion = (questionId: string) => { // Add type annotation for questionId
//     console.log(questionId, 'questionId-clicked')
//     setEditQuestionId(questionId);
//   };

//   const handleCloseEditForm = () => {
//     setEditQuestionId(null);
//   };

//   useEffect(() => {
//     if (token) {
//       dispatch(fetchQuestions()); // Dispatch fetchQuestions if token is available
//     }
//   }, [dispatch, token]);

//   // State to store selected options
//   const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

//   // Function to toggle selection of an option
//   const toggleOptionSelection = (questionIndex: number, optionIndex: number) => {
//     const updatedSelectedOptions = [...selectedOptions];
//     const option = questions[questionIndex].options[optionIndex];
//     const optionIndexInSelection = updatedSelectedOptions.indexOf(option);

//     if (optionIndexInSelection === -1) {
//       // Option not selected, add it
//       updatedSelectedOptions.push(option);
//     } else {
//       // Option already selected, remove it
//       updatedSelectedOptions.splice(optionIndexInSelection, 1);
//     }
//     setSelectedOptions(updatedSelectedOptions);
//   };

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
//               <CreateQuestionForm />
//               <h3>Questions Data:</h3>
//               <ul>
//                 {questions.map((question, questionIndex) => (
//                   <div key={questionIndex}>
//                     <p>{`${questionIndex + 1}. ${question.question}`}</p>
//                     <ul>
//                       {question.options.map((option, optionIndex) => (
//                         <li key={optionIndex}>
//                           <input
//                             type="checkbox"
//                             value={option}
//                             checked={selectedOptions.includes(option)}
//                             onChange={() => toggleOptionSelection(questionIndex, optionIndex)}
//                           />
//                           <label>{option}</label>
//                         </li>
//                       ))}
//                     </ul>
//               <button onClick={() => handleEditQuestion(question.id)}>Edit</button>
//                   </div>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
// {editQuestionId && questions.find((q) => q.id === editQuestionId) && (
//   <UpdateQuestionForm2
//     questionId={editQuestionId}
//     initialQuestion={(questions.find((q) => q.id === editQuestionId) || {}).question || ''}
//     initialOptions={(questions.find((q) => q.id === editQuestionId) || {}).options || []}
//     onClose={handleCloseEditForm}
//   />
// )}

//     </div>
//   );
// };

// export default Home;



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

const Home = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.token.value);
  const questions = useSelector((state: RootState) => state.questions.questions);
  const loading = useSelector((state: RootState) => state.questions.loading);
  const [editQuestionId, setEditQuestionId] = useState<string | null>(null); // Define type explicitly
console.log(questions, 'questions---')
// console.log(questions[0].id, 'questions[0]---')
  
const handleEditQuestion = (questionId: string) => {
  console.log(questionId,'questionId====')
    setEditQuestionId(questionId);
  };

  const handleDelete = (questionId: string) => {
    dispatch(deleteQuestion(questionId));
  };

  const handleCloseEditForm = () => {
    setEditQuestionId(null);
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchQuestions());
    }
  }, [dispatch, token]);

  const toggleOptionSelection = (questionIndex: number, optionIndex: number) => {
    // Implement toggleOptionSelection logic
  };

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
              <CreateQuestionForm />
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
        <UpdateQuestionForm2
          questionId={editQuestionId}
          initialQuestion={(questions.find((q) => q.id === editQuestionId) || {}).question || ''}
          initialOptions={(questions.find((q) => q.id === editQuestionId) || {}).options || []}
          onClose={handleCloseEditForm}
        />
      )}
    </div>
  );
};

export default Home;