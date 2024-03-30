// import React, { useState } from 'react';
// import { fetchToken } from '../redux/thunks/tokenThunks';
// import { useAppDispatch } from '../redux/store/hooks';
// import styled from 'styled-components';
// import { StyledDiv } from '@/__style/ui-block.style';
// import { HeadingText } from '@/__style/global.style';
// import Button from './Button';

// const TokenForm = () => {
//   const dispatch = useAppDispatch();
//   const [email, setEmail] = useState('');
//   const [isValidEmail, setIsValidEmail] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(fetchToken(email));
//   };

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputEmail = e.target.value;
//     setEmail(inputEmail);
//     // Check if the input email is valid
//     setIsValidEmail(validateEmail(inputEmail));
//   };

//   const validateEmail = (inputEmail: string) => {
//     // Simple email validation using regex
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(inputEmail);
//   };

//   return (
//     <StyledContainer>
//       <StyledHeader color='blue' fsize='64px' fw='600' pb='20px' >
//         Wecome
//       </StyledHeader>
//       <StyledHeader color='blue' fsize='24px' fw='400' pb='20px' >
//         Your email is required to be granted access to multi-choice questions:
//       </StyledHeader>
//       <StyledForm onSubmit={handleSubmit}>
//         <div>
//         <input type="email" value={email} placeholder='Enter your email...' onChange={handleEmailChange} />
//         </div>
//         <StyledButton type="submit" disabled={!isValidEmail}>
//           Request
//         </StyledButton>
//       </StyledForm>
//     </StyledContainer>
//   );
// };

// export default TokenForm;

// const StyledContainer = styled(StyledDiv)`
//   max-width: 700px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid grey;
//   border-radius: 6px;
//   min-height: 400px;
// `;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   row-gap: 10px;

//   input {
//     height: 30px;
//     width: 200px;
//     border-radius: 8px;
//     padding-left: 7px;
//   }
// `;

// const StyledButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
// const StyledHeader = styled(HeadingText)`
// display: flex;
// text-align: center;

// @media only screen and (min-width: 768px) {
// padding: 20px 100px;
// }
// `;



import React, { useState } from 'react';
import { fetchToken } from '../redux/thunks/tokenThunks';
import { useAppDispatch } from '../redux/store/hooks';
import styled from 'styled-components';
import { StyledDiv } from '@/__style/ui-block.style';
import { HeadingText } from '@/__style/global.style';

const TokenForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchToken(email));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Check if the input email is valid
    setIsValidEmail(validateEmail(inputEmail));
  };

  const validateEmail = (inputEmail: string) => {
    // Simple email validation using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };

  return (
    <div>
      <div 
      // color='blue' fsize='64px' fw='600' pb='20px' 
      >
        Wecome
      </div>
      <div 
      // color='blue' fsize='24px' fw='400' pb='20px'
       >
        Your email is required to be granted access to multi-choice questions:
      </div>
      <div onSubmit={handleSubmit}>
        <div>
        <input type="email" value={email} placeholder='Enter your email...' onChange={handleEmailChange} />
        </div>
        <button type="submit" disabled={!isValidEmail}>
          Request
        </button>
      </div>
    </div>
  );
};

export default TokenForm;

const StyledContainer = styled(StyledDiv)`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  border-radius: 6px;
  min-height: 400px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;

  input {
    height: 30px;
    width: 200px;
    border-radius: 8px;
    padding-left: 7px;
  }
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const StyledHeader = styled(HeadingText)`
display: flex;
text-align: center;

@media only screen and (min-width: 768px) {
padding: 20px 100px;
}
`;
