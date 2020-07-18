import React, { useRef } from 'react';

import Modal from '../../../../shared/components/ModalTwo';

const NewProject = () => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };
  return (
    <>
      <div onClick={openModal}>New Project</div>
      <Modal ref={modalRef}>
        <h1>Test</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum
          assumenda quidem aliquam vitae blanditiis atque rem libero harum nemo
          quisquam cupiditate, itaque esse in ab qui expedita nam similique!
        </span>
        <button onClick={() => modalRef.current.close()}>Close Modal</button>
      </Modal>
    </>
  );
};

export default NewProject;
