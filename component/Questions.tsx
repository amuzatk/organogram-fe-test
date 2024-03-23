import React, { useState } from 'react';
import axios from 'axios';

const Question: React.FC<{ id: string; question: string; options: string[] }> = ({
  id,
  question,
  options,
}) => {
  const [editedQuestion, setEditedQuestion] = useState(question);
  const [editedOptions, setEditedOptions] = useState<string[]>(options);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...editedOptions];
    newOptions[index] = value;
    setEditedOptions(newOptions);
  };

  const handleEdit = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.put(
        `https://qt.organogram.app/questions/${id}`,
        {
          question: editedQuestion,
          options: editedOptions.filter(option => option.trim() !== ''), // Remove empty options
        },
        {
          headers: {
            Token: token,
          },
        }
      );
      console.log('Question updated successfully');
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.delete(`https://qt.organogram.app/questions/${id}`, {
        headers: {
          Token: token,
        },
      });
      console.log('Question deleted successfully');
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  return (
    <div>
      <h3>Edit Question</h3>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={editedQuestion}
          onChange={(e) => setEditedQuestion(e.target.value)}
        />
      </div>
      <div>
        <label>Options:</label>
        {editedOptions.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleEdit}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Question;
