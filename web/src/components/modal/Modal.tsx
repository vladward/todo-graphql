import './Modal.css';

import React, { FC } from 'react';
import ReactModal from 'react-modal';

export type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: JSX.Element;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: 'auto',
      overflow: 'visible',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: '11',
    },
  };

  const handleCloseModal = () => {
    onClose && onClose();
  };

  return (
    <ReactModal
      closeTimeoutMS={300}
      style={customStyles}
      onRequestClose={handleCloseModal}
      isOpen={isOpen}
      ariaHideApp={false}
      overlayClassName='defaultModal-overlay'
    >
      {children}
    </ReactModal>
  );
};
