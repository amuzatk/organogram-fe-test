import React, { useState } from 'react';
import axios from 'axios';

const AddQuestion: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '']);

  const handleAddOption = () => {
    setOptions(prevOptions => [...prevOptions, '']);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

const handleSubmit = async () => {
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem('token');
  
      const response = await axios.post(
        'https://qt.organogram.app/questions',
        {
          question,
          options
        },
        {
          headers: {
            Token: token // Assign token to request header
          }
        }
      );
      console.log('New question created with ID:', response.data);
      // Reset form fields
      setQuestion('');
      setOptions(['', '', '']);
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };
  
  return (
    <div>
      <h2>Add New Question</h2>
      <div>
        <label>Question:</label>
        <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
      </div>
      <div>
        <label>Options:</label>
        {options.map((option, index) => (
          <div key={index}>
            <input type="text" value={option} onChange={e => handleOptionChange(index, e.target.value)} />
          </div>
        ))}
        <button onClick={handleAddOption}>Add Option</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddQuestion;
