import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../redux/store/hooks';
import { updateQuestionAsync } from '../redux/thunks/updateQuestionThunks';

const UpdateQuestionForm = ({ id, initialQuestion, initialOptions }: { id: string; initialQuestion: string; initialOptions: string[] }) => {
  const dispatch = useAppDispatch();
  const [question, setQuestion] = useState(initialQuestion);
  const [options, setOptions] = useState<string[]>(initialOptions);

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleUpdateQuestion = () => {
    // dispatch(updateQuestionAsync(id, question, options));
  };

  return (
    <div>
      <h3>Update Question:</h3>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      <h4>Options:</h4>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <button onClick={() => handleRemoveOption(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddOption}>Add Option</button>
      <button onClick={handleUpdateQuestion}>Update Question</button>
    </div>
  );
};

export default UpdateQuestionForm;
