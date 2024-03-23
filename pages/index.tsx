import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Define TypeScript types for the response object
type QuestionId = string;

interface Question {
    question: string;
    options: string[];
}

interface QuestionResponse {
    [questionId: string]: Question;
}

const Home: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchQuestions(storedToken);
    } else {
      handleTokenFetch();
    }
  }, []);

  const fetchQuestions = async (currentToken: string) => {
    try {
      setLoading(true);
      const response = await axios.get<QuestionResponse>('https://qt.organogram.app/questions', {
        headers: {
          Token: currentToken
        }
      });
      setQuestions(Object.values(response.data));
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTokenFetch = async () => {
    try {
      const tokenResponse = await axios.post<{ token: string }>('https://qt.organogram.app/token', { email });
      const receivedToken = tokenResponse.data.token;
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      fetchQuestions(receivedToken);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      {token && (
        <div>
          <h1>Questions</h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ol>
              {questions.map((question, index) => (
                <QuestionWrapper key={question.question}>
                  <h3>{`${index + 1}. ${question.question}`}</h3>
                  <OptionsList>
                    {question.options.map((option, optionIndex) => (
                      <CheckboxWrapper key={optionIndex}>
                        <input type="checkbox" id={`${question.question}-${optionIndex}`} name={`${question.question}-${optionIndex}`} value={option} />
                        <label htmlFor={`${question.question}-${optionIndex}`}>{option}</label>
                      </CheckboxWrapper>
                    ))}
                  </OptionsList>
                </QuestionWrapper>
              ))}
            </ol>
          )}
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const OptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CheckboxWrapper = styled.li`
  margin-bottom: 8px;

  input[type="checkbox"] {
    margin-right: 8px;
  }
`;

export default Home;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// // Define TypeScript types for the response object
// type QuestionId = string;

// interface Question {
//     question: string;
//     options: string[];
// }

// interface QuestionResponse {
//     [questionId: string]: Question;
// }

// const Home: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [email, setEmail] = useState<string>('');

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       fetchQuestions(storedToken);
//     } else {
//       handleTokenFetch();
//     }
//   }, []);

//   const fetchQuestions = async (currentToken: string) => {
//     try {
//       setLoading(true);
//       const response = await axios.get<QuestionResponse>('https://qt.organogram.app/questions', {
//         headers: {
//           Token: currentToken
//         }
//       });
//       setQuestions(Object.values(response.data));
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTokenFetch = async () => {
//     try {
//       const tokenResponse = await axios.post<{ token: string }>('https://qt.organogram.app/token', { email });
//       const receivedToken = tokenResponse.data.token;
//       setToken(receivedToken);
//       localStorage.setItem('token', receivedToken);
//       fetchQuestions(receivedToken);
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       {token && (
//         <div>
//           <h1>Questions</h1>
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ul>
//               {questions.map((question) => (
//                 <QuestionWrapper key={question.question}>
//                   <h3>{question.question}</h3>
//                   <OptionsList>
//                     {question.options.map((option, index) => (
//                       <CheckboxWrapper key={index}>
//                         <input type="checkbox" id={`${question.question}-${index}`} name={`${question.question}-${index}`} value={option} />
//                         <label htmlFor={`${question.question}-${index}`}>{option}</label>
//                       </CheckboxWrapper>
//                     ))}
//                   </OptionsList>
//                 </QuestionWrapper>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//       {error && <div>Error: {error}</div>}
//     </div>
//   );
// };

// const QuestionWrapper = styled.div`
//   margin-bottom: 20px;
// `;

// const OptionsList = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const CheckboxWrapper = styled.li`
//   margin-bottom: 8px;

//   input[type="checkbox"] {
//     margin-right: 8px;
//   }
// `;

// export default Home;