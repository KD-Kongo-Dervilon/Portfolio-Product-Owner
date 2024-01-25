// Modal.jsx
import React from 'react';
import './modal.css'; 

const Modal = ({ closeModal, children }) => {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
