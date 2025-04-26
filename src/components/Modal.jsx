import React from 'react'

function Modal({isOpen,onClose,children}) {
    if(!isOpen) return null
  return (
    <div class="modal" id="myModal">
    <div class="modal-content">
        <span id="closeModalBtn" onClick={onClose} class="close">
&times;
        </span>
        {children}
        </div>
        </div>
  )
}

export default Modal