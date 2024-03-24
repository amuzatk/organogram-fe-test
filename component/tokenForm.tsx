// components/TokenForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchToken } from '../redux/thunks/tokenThunks';
import { useAppDispatch } from '../redux/store/hooks';

const TokenForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchToken(email));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Provide your email to be granted access to multi-choice questions:</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} />
        <button type="submit">Request</button>
      </form>
    </div>
  );
};

export default TokenForm;