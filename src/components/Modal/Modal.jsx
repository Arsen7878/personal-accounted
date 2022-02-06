import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import c from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackdropClick = event => {
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className={c.Overlay} onClick={handleBackdropClick}>
      <div className={c.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
