// import React from 'react';
// import ReactModal from 'react-modal';
// import { FaTimes } from 'react-icons/fa';

// interface FormModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   children: React.ReactNode;
// }

// const EditQuestionModal: React.FC<FormModalProps> = ({ isOpen, onRequestClose, children }) => {
//   const customStyles = {
//     content: {
//       width: '50%', // Adjust width as desired
//       height: '50%', // Adjust height as desired
//       margin: 'auto',
//       borderRadius: '10px',
//       padding: '20px',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//       backgroundColor: 'white',
//     },
//     overlay: {
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//   };

//   return (
//     <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
//       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <button onClick={onRequestClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//           <FaTimes />
//         </button>
//       </div>
//       {children}
//     </ReactModal>
//   );
// };

// export default EditQuestionModal;


// UpdateQuestionModal.tsx
import React from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import UpdateQuestionForm2 from '@/component/UpdateQuestionForm2';

interface UpdateQuestionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  questionId: string;
  initialQuestion: string;
  initialOptions: string[];
}

const UpdateQuestionModal: React.FC<UpdateQuestionModalProps> = ({
  isOpen,
  onRequestClose,
  questionId,
  initialQuestion,
  initialOptions,
}) => {
  const customStyles = {
    content: {
      width: '50%',
      height: '50%',
      margin: 'auto',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: 'white',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={onRequestClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaTimes />
        </button>
      </div>
      <UpdateQuestionForm2
        questionId={questionId}
        initialQuestion={initialQuestion}
        initialOptions={initialOptions}
        onClose={onRequestClose}
      />
    </ReactModal>
  );
};

export default UpdateQuestionModal;