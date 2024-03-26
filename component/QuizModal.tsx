import React from 'react';
import { Button } from 'react-bootstrap';
import { HeadingText, ParagraphText } from '@/__style/global.style';
import { StyledDiv, StyledFlex, StyledFlexItem, StyledGrid } from '@/__style/ui-block.style';
import styled from 'styled-components';

// interface QuizModalProps {
//   question: string;
//   options: string[];
//   handleEditQuestion: () => void;
//   handleDelete: () => void;
// }

// const QuizModal: React.FC<QuizModalProps> = ({ question, options, handleEditQuestion, handleDelete }) => {
//   return (
//     <StyledContainer
//     cg="20px"
//     // justify="enter"
//     align="left"
//     // gtc="minmax(200px, 300px) minmax(120px, 200px)  minmax(120px, 200px) 120px 100px  80px  80px 50px"
//   >
//       <StyledFlexItem>
//         <HeadingText color='blue' fsize='18px' fw='400'>
//           Q. {question}
//         </HeadingText>
//       </StyledFlexItem>

//       <StyledOptions>
//         <StyledDiv>
//           {options.map((option, index) => (
//             <StyledDiv
            
//              key={index}>
//               <StyledFlex
//               fDirection='row'
//               justify='left'
//               align='left'
//               cg='10px'
//               >
//                 <input type="checkbox" value={option} />
//             {option}
//               </StyledFlex>
//             </StyledDiv>
//           ))}
//           <StyledButtonContainer>
//             <StyledBtnCon >
//             <Button variant="primary" onClick={handleEditQuestion}>Edit</Button>
//             </StyledBtnCon>
//             <StyledBtnConDelete>
//               <Button variant="danger" onClick={handleDelete}>Delete</Button>
//             </StyledBtnConDelete>
//           </StyledButtonContainer>
//         </StyledDiv>
//       </StyledOptions>
//     </StyledContainer>
//   );
// };

// export default QuizModal;


// import React from 'react';
// import { Button } from 'reactstrap';

interface QuizModalProps {
  question: string;
  options: string[];
  handleEditQuestion: () => void;
  handleDelete: () => void;
  questionNumber: number; // New prop to represent the question number
}

const QuizModal: React.FC<QuizModalProps> = ({
  question,
  options,
  handleEditQuestion,
  handleDelete,
  questionNumber,
}) => {
  return (
    <StyledContainer
      cg="20px"
      // justify="enter"
      align="left"
      // gtc="minmax(200px, 300px) minmax(120px, 200px)  minmax(120px, 200px) 120px 100px  80px  80px 50px"
    >
      <StyledFlexItem>
        <HeadingText color='blue' fsize='18px' fw='400'>
          Q{questionNumber}. {question}
        </HeadingText>
      </StyledFlexItem>

      <StyledOptions>
        <StyledDiv>
          {options.map((option, index) => (
            <StyledDiv key={index}>
              <StyledFlex
                fDirection='row'
                justify='left'
                align='left'
                cg='10px'
              >
                <input type="checkbox" value={option} />
                {option}
              </StyledFlex>
            </StyledDiv>
          ))}
          <StyledButtonContainer>
            <StyledBtnCon >
              <Button variant="primary" onClick={handleEditQuestion}>Edit</Button>
            </StyledBtnCon>
            <StyledBtnConDelete>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </StyledBtnConDelete>
          </StyledButtonContainer>
        </StyledDiv>
      </StyledOptions>
    </StyledContainer>
  );
};

export default QuizModal;


const StyledContainer2 = styled(StyledGrid)`
  padding: 13px 24px;
  background: var(--background-primary_2);
  position: relative;
  border-bottom: 1px solid var(--border);
`;
const StyledContainer = styled(StyledFlex)`
  flex-direction: column;
  /* justify-content: left; */
  align-items: left;
  max-width: 300px;
  border: 2px solid grey;
  height: auto;
  border-radius: 8px;
  row-gap: 20px;
  padding: 5px 10px;
  margin: 15px;
  background: var(--background-primary_2);
  /* grid-template-columns: repeat(4fr 200px); */
`;

const StyledButtonContainer = styled(StyledFlex)`
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-top: 9px;
`;

const StyledBtnConDelete = styled.div`
  button {
    background: var(--background-primary_5) !important;
    border: none !important;
    border-radius: 6px;
    color: red;
    padding: 12px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    height: 48px;
    width: 100%;
    margin-top: 24px;
  }
`;

const StyledBtnCon = styled.div`
  button {
    background: var(--background-primary_5) !important;
    border: none !important;
    border-radius: 6px;
    color: #0044ff;
    padding: 12px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    height: 48px;
    width: 100%;
    margin-top: 24px;
  }
`;

const StyledOptions = styled(StyledFlex)`
flex-direction: column;
justify-content: center;
align-items: left;
/* border: 1px solid green; */
`;

