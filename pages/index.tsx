import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios'; // Import AxiosError
import { Checkbox } from 'antd';
// import AddQuestion from '@/component/CreateQuestions';
// import AddQuestion from '@/component/CreateQuestions';
// import Question from '@/component/Questions';

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
  const [questions, setQuestions] = useState<Question[]>([]); // Use Question type here
  const [loading, setLoading] = useState<boolean>(false); // Add loading state
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    // Check if token exists in local storage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchQuestions(storedToken); // Fetch questions using stored token
    } else {
      // If token doesn't exist, fetch it
      handleTokenFetch();
    }
  }, []); // Fetch data only once on component mount

  const fetchQuestions = async (currentToken: string) => {
    try {
      setLoading(true); // Set loading to true while fetching
      // Fetch questions using the obtained token
      const response = await axios.get<QuestionResponse>('https://qt.organogram.app/questions', {
        headers: {
          Token: currentToken
        }
      });
      setQuestions(Object.values(response.data)); // Convert object to array
    } catch (error: any) { // Specify AxiosError type here
      setError(error.message);
    } finally {
      setLoading(false); // Set loading back to false after fetching
    }
  };

  const handleTokenFetch = async () => {
    try {
      // Fetch token
      const tokenResponse = await axios.post<{ token: string }>('https://qt.organogram.app/token', { email });
      const receivedToken = tokenResponse.data.token;
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken); // Store token in local storage
      fetchQuestions(receivedToken); // Fetch questions using obtained token
    } catch (error: any) { // Specify AxiosError type here
      setError(error.message);
    }
  };

  return (
    <div>
      {/* <AddQuestion /> */}
      {/* <Question /> */}
      {/* UI to display questions */}
      {token && (
        <div>
          <h1>Questions</h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {questions.map((question) => (
                <QuestionWrapper key={question.question}>
                  <h3>{question.question}</h3>
                  <OptionsList>
                    {question.options.map((option, index) => (
                      <li key={index}>{option}</li>
                      // <Checkbox.Group options={question.options} />
                    ))}
                  </OptionsList>
                </QuestionWrapper>
              ))}
            </ul>
          )}
        </div>
      )}
      {/* Error message */}
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

export default Home;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { Spin } from 'antd'; // Import Spin component from Ant Design

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
//   const [questions, setQuestions] = useState<Question[]>([]); // Use Question type here
//   const [loading, setLoading] = useState<boolean>(false); // Add loading state
//   const [error, setError] = useState<string | null>(null);
//   const [email, setEmail] = useState<string>('');

//   useEffect(() => {
//     // Check if token exists in local storage
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken);
//       fetchQuestions(storedToken); // Fetch questions using stored token
//     } else {
//       // If token doesn't exist, fetch it
//       handleTokenFetch();
//     }
//   }, []); // Fetch data only once on component mount

//   const fetchQuestions = async (currentToken: string) => {
//     try {
//       setLoading(true); // Set loading to true while fetching
//       // Fetch questions using the obtained token
//       const response = await axios.get<QuestionResponse>('https://qt.organogram.app/questions', {
//         headers: {
//           Token: currentToken
//         }
//       });
//       setQuestions(Object.values(response.data)); // Convert object to array
//     } catch (error: any) { // Specify AxiosError type here
//       setError(error.message);
//     } finally {
//       setLoading(false); // Set loading back to false after fetching
//     }
//   };

//   const handleTokenFetch = async () => {
//     try {
//       // Fetch token
//       const tokenResponse = await axios.post<{ token: string }>('https://qt.organogram.app/token', { email });
//       const receivedToken = tokenResponse.data.token;
//       setToken(receivedToken);
//       localStorage.setItem('token', receivedToken); // Store token in local storage
//       fetchQuestions(receivedToken); // Fetch questions using obtained token
//     } catch (error: any) { // Specify AxiosError type here
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       {/* UI to display questions */}
//       {token && (
//         <div>
//           <h1>Questions</h1>
//           {loading ? (
//             <Spin size="large" /> // Use Spin component for loading indicator
//           ) : (
//             <ul>
//               {questions.map((question) => (
//                 <QuestionWrapper key={question.question}>
//                   <h3>{question.question}</h3>
//                   <OptionsList>
//                     {question.options.map((option, index) => (
//                       <li key={index}>{option}</li>
//                     ))}
//                   </OptionsList>
//                 </QuestionWrapper>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//       {/* Error message */}
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

// export default Home;
