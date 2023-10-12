import React from 'react';
import './modal.css';

export default function Modal({ isOpen, onClose, children }) {
  const clickClose = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={clickClose}>
      <div className="modal">
        <button onClick={onClose} className="close-button">
          X
        </button>
        {children}
      </div>
    </div>
  );
}
