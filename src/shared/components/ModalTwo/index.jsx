import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { ModalWrapper, ModalBackdrop, ModalBox, ModalTop } from './Styles';

const propTypes = {
  width: PropTypes.number,
  top: PropTypes.number,
};

const defaultProps = {
  width: 60,
};

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <ModalWrapper>
        <ModalBackdrop onClick={close} />
        <ModalTop id='modaltop' />
        <ModalBox width={props.width}>{props.children}</ModalBox>
      </ModalWrapper>,
      document.getElementById('modal-root')
    );
  }

  return null;
});

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
