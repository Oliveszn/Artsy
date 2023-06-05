import React from "react";
import ReactDom from "react-dom";

const Modal = ({ open, onclose, children }) => {
  if (!open) return;
  return ReactDom.createPortal(
    <>
      <div className="z-50 p-12 fixed top-2/4 left-2/4 bg-priColor">
        <button onClick={onclose}>Close button </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
