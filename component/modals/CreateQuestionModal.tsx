
// // CreateQuestionModal.tsx
// import React from 'react';
// import ReactModal from 'react-modal';

// interface FormModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   children: React.ReactNode; // Define children prop
// }

// const CreateQuestionModal: React.FC<FormModalProps> = ({ isOpen, onRequestClose, children }) => {
//   return (
//     <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
//       {children}
//     </ReactModal>
//   );
// };

// export default CreateQuestionModal;


// FormModal.tsx
import React from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

interface FormModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const CreateQuestionModal: React.FC<FormModalProps> = ({ isOpen, onRequestClose, children }) => {
  const customStyles = {
    content: {
      width: '50%', // Adjust width as desired
      height: '50%', // Adjust height as desired
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
      {children}
    </ReactModal>
  );
};

export default CreateQuestionModal;
