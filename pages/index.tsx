import { StyledButton, StyledDiv, StyledFlex } from '@/__style/ui-block.style';
// import Button from '@/component/Button';
import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <TestDiv>
      <h1>Hello Kazmatics</h1>
      <BBton>Styled Button</BBton>

      <StyledFlex fDirection='column'>
        <StyledDiv>First Container</StyledDiv>
        <StyledDiv>Second Container</StyledDiv>
      </StyledFlex>
    </TestDiv>
  );
};

export default Home;
const TestDiv = styled(StyledDiv)`
margin: 30px;

h1{
  color: red;
}
`;

const BBton = styled.button`
border: 5px solid red;
height: 50px;
`;