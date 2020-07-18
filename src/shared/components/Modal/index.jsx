import React, { useRef, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// Custom hooks
import useOnClickOutside from '../../hooks/onOutsideClick';

// Styled component
import { ModalWrapper, ModalBox, ModalBackdrop, CloseButton } from './Styles';

const propTypes = {
  width: PropTypes.number,
  top: PropTypes.number,
};

const defaultProps = {
  width: 60,
  top: 40,
};

const Modal = (props) => {
  const modalText = props.modalText;

  const ref = useRef();

  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));

  if (!isModalOpen) {
    return <div onClick={() => setModalOpen(true)}>{modalText}</div>;
  } else {
    return ReactDOM.createPortal(
      <Fragment>
        <ModalWrapper>
          <ModalBackdrop>
            <ModalBox ref={ref} width={props.width} top={props.top}>
              <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
              {props.children}
            </ModalBox>
          </ModalBackdrop>
        </ModalWrapper>
      </Fragment>,
      document.getElementById('modal-root')
    );
  }
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
