import React, { useState, Fragment, useRef } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTask,
  updateTask,
} from '../../../../../../../Redux/actions/projectActions';

import {
  Waffle,
  SubmitButton,
} from '../../../../../../../shared/components/Buttons';
import Modal from '../../../../../../../shared/components/ModalTwo';

const TaskModal = ({ task, project }) => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const dispatch = useDispatch();
  return (
    <Fragment>
      <div
        onClick={() => {
          dispatch(getTask(task._id));
          openModal();
        }}
      >
        <Waffle />
      </div>
      <Modal ref={modalRef} width={80} top={450}>
        <div>
          <div>
            <h2>{project.projectcode}</h2>
          </div>
        </div>
        <div>
          <h3>{task.taskname}</h3>
        </div>

        <button onClick={() => modalRef.current.close()}>Close</button>
      </Modal>
    </Fragment>
  );
};

export default TaskModal;
