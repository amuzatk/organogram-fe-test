// // Home.tsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import TokenForm from '@/component/tokenForm';
// import { RootState } from '@/redux/store';
// import { fetchQuestions } from '../redux/thunks/questionsThunks';

// const Home = () => {
//   const dispatch = useDispatch();
//   const token = useSelector((state: RootState) => state.token.value);
//   const questions = useSelector((state: RootState) => state.questions.questions);
//   const loading = useSelector((state: RootState) => state.questions.loading);

//   useEffect(() => {
//     if (token) {
//       dispatch(fetchQuestions()); // Dispatch fetchQuestions if token is available
//     }
//   }, [dispatch, token]);

//   return (
//     <div>
//       {!token ? (
//         <TokenForm />
//       ) : (
//         <div>
//           {/* <h2>Token Generated Successfully!</h2> */}
//           {loading ? (
//             <p>Loading...</p>
//           ) : (
//             <div>
//               <h3>Questions Data:</h3>
//               <ul>
//                 {questions.map((question, index) => (
//                   <div key={index}>
//                     <p>{`${index + 1}. ${question.question}`}</p>
//                     <ul>
//                       {question.options.map((option, optionIndex) => (
//                         <li key={optionIndex}>{option}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;



// Home.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TokenForm from '@/component/tokenForm';
import { RootState } from '@/redux/store';
import { fetchQuestions } from '../redux/thunks/questionsThunks';

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.reducer.token.value);
  const questions = useSelector((state: RootState) => state.reducer.questions.questions);
  const loading = useSelector((state: RootState) => state.reducer.questions.loading);

  useEffect(() => {
    if (token) {
      dispatch(fetchQuestions()); // Dispatch fetchQuestions if token is available
    }
  }, [dispatch, token]);

  return (
    <div>
      {!token ? (
        <TokenForm />
      ) : (
        <div>
          {/* <h2>Token Generated Successfully!</h2> */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h3>Questions Data:</h3>
              <ul>
                {questions.map((question, index) => (
                  <div key={index}>
                    <p>{`${index + 1}. ${question.question}`}</p>
                    <ul>
                      {question.options.map((option, optionIndex) => (
                        <li key={optionIndex}>{option}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;