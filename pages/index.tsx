// Home.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TokenForm from '@/component/tokenForm';
import { RootState } from '@/redux/store';
import { fetchQuestions } from '../redux/thunks/questionsThunks';
import { useAppDispatch } from '../redux/store/hooks';
import CreateQuestionForm from '@/component/CreateQuestionForm';

const Home = () => {
  const dispatch = useAppDispatch();
  const token = useSelector((state: RootState) => state.token.value);
  const questions = useSelector((state: RootState) => state.questions.questions);
  const loading = useSelector((state: RootState) => state.questions.loading);

  useEffect(() => {
    if (token) {
      dispatch(fetchQuestions()); // Dispatch fetchQuestions if token is available
    }
  }, [dispatch, token]);

  // State to store selected options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Function to toggle selection of an option
  const toggleOptionSelection = (questionIndex: number, optionIndex: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    const option = questions[questionIndex].options[optionIndex];
    const optionIndexInSelection = updatedSelectedOptions.indexOf(option);

    if (optionIndexInSelection === -1) {
      // Option not selected, add it
      updatedSelectedOptions.push(option);
    } else {
      // Option already selected, remove it
      updatedSelectedOptions.splice(optionIndexInSelection, 1);
    }

    setSelectedOptions(updatedSelectedOptions);
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
                {questions.map((question, questionIndex) => (
                  <div key={questionIndex}>
                    <p>{`${questionIndex + 1}. ${question.question}`}</p>
                    <ul>
                      {question.options.map((option, optionIndex) => (
                        <li key={optionIndex}>
                          <input
                            type="checkbox"
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={() => toggleOptionSelection(questionIndex, optionIndex)}
                          />
                          <label>{option}</label>
                        </li>
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
