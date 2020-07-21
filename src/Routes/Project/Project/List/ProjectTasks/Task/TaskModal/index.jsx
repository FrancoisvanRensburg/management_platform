import React, { useState, Fragment, useRef } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTask,
  updateTask,
} from '../../../../../../../Redux/actions/projectActions';

import {
  Waffle,
  DetailButton,
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
      <Modal ref={modalRef} width={60} top={450}>
        {/* Header component */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div>
              <h2>{project.projectcode}</h2>
            </div>
            {task.tasknumber && (
              <div>
                {' / '}
                {task.tasknumber}
              </div>
            )}
          </div>
          <div>
            <DetailButton />
          </div>
        </div>
        {/* Main section */}
        <div>
          {/* Section header */}
          <div>
            <h3>{task.taskname}</h3>
          </div>
          <div>
            <div>attach</div>
            <div>Add checklist</div>
            <div>
              <p>Predecessor</p>
              <div></div>
            </div>
          </div>
        </div>

        <button onClick={() => modalRef.current.close()}>Close</button>
      </Modal>
    </Fragment>
  );
};

export default TaskModal;
