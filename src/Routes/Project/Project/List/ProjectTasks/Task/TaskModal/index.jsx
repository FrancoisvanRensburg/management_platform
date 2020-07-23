import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import moment from 'moment';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTask,
  updateTask,
  getProjectTasks,
} from '../../../../../../../Redux/actions/projectActions';

import TaskCommentBox from './Comments';

import {
  Waffle,
  DetailButton,
  SubmitButton,
} from '../../../../../../../shared/components/Buttons';
import Modal from '../../../../../../../shared/components/ModalThree';

import {
  MyTextInput,
  MyTextarea,
} from '../../../../../../../shared/components/Forms';
import CustomDropdown from '../../../../../../../shared/components/Dropdown';
import ProgressBar from '../../../../../../../shared/components/ProgressBar';

import { ReactComponent as Doc } from '../../../../../../../App/assets/images/doc.svg';

import { DatePicker } from './Styles';
import Moment from 'react-moment';

const prty = [
  { _id: 'tskprty1', value: '3', name: 'High' },
  { _id: 'tskprty2', value: '2', name: 'Medium' },
  { _id: 'tskprty3', value: '1', name: 'Low' },
];

const cnstr = [
  { _id: 'tskcnstr1', value: 'asap', name: 'ASAP' },
  { _id: 'tskcnstr2', value: 'alap', name: 'ALAP' },
];

const TaskDetail = ({ task, project }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProjectTasks(project._id));
  // }, [dispatch]);
  const tasks = useSelector((store) => store.project.tasks);

  return (
    <div>
      <div
        onClick={() => {
          dispatch(getTask(task._id));
          setToggleModal(!toggleModal);
        }}
      >
        <Waffle />
      </div>
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>{project.projectcode}</Modal.Header>
        <Modal.Body>
          <div style={{ overflowY: 'auto', height: '100%' }}>
            <div>
              <Formik
                enableReinitialize={true}
                initialValues={{
                  taskname:
                    task === null || !task.taskname ? '' : task.taskname,
                  assignee:
                    task === null || !task.assignee ? '' : task.assignee,
                  description:
                    task === null || !task.description ? '' : task.description,
                  actualstartdate:
                    task === null || !task.actualstartdate
                      ? ''
                      : moment(task.actualstartdate),
                  actualenddate:
                    task === null || !task.actualenddate
                      ? ''
                      : moment(task.actualenddate),
                  priority:
                    task === null || !task.priority ? '' : task.priority,
                  effort: task === null || !task.effort ? '' : task.effort,
                }}
                onSubmit={(values, { setSubmitting }) => {
                  {
                    task !== null && dispatch(updateTask(task._id, values));
                  }
                  setSubmitting(false);
                }}
              >
                <Form>
                  <MyTextInput name='taskname' type='text' />
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 15 }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        border: '1px solid red',
                        padding: '7px 10px',
                        borderRadius: '2px',
                      }}
                    >
                      <Doc /> attach
                    </div>
                    <div>Add Checklist</div>
                    <div>
                      <p>Predecessor</p>
                      <div style={{ width: '200px' }}>
                        <Select
                          options={tasks}
                          getOptionLabel={(option) => option.taskname}
                          getOptionValue={(option) => option._id}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div
                      style={{
                        width: '70%',
                        border: '1px solid red',
                        height: 'auto',
                      }}
                    >
                      <div
                        style={{
                          width: '80%',
                          height: '150px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <label htmlFor='description'>Description</label>
                        <MyTextarea
                          name='description'
                          placeholder='Add a description'
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        width: '30%',
                        padding: '0 10px',
                        border: '1px solid red',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '38px',
                        }}
                      >
                        <label htmlFor='percentage'>Status</label>
                        <ProgressBar percentage={task.progress} />
                      </div>
                      <div>
                        <CustomDropdown
                          label='Assignee'
                          name='assignee'
                          options={project.contributors}
                          getOptionLabel={(option) => option.name}
                          getOptionValue={(option) => option._id}
                        />
                      </div>
                      <CustomDropdown
                        name='priority'
                        options={prty}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.name}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Section:</span>
                        {task === null || !task.section ? (
                          <span>None</span>
                        ) : (
                          <span>{task.section}</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor='actualstartdate'>Start date</label>
                        <DatePicker
                          name='actualstartdate'
                          showMonthDropdown
                          useShortMonthInDropdown
                          placeholderText='Start date'
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor='actualenddate'>End date</label>
                        <DatePicker
                          name='actualenddate'
                          showMonthDropdown
                          useShortMonthInDropdown
                          placeholderText='End date'
                        />
                      </div>
                      <MyTextInput
                        label='Effort (hrs)'
                        name='effort'
                        placeholder='Work required'
                        type='number'
                      />
                    </div>
                  </div>
                </Form>
              </Formik>
              <div style={{ display: 'flex', gap: 30 }}>
                <div style={{ width: '65%' }}>
                  <TaskCommentBox task={task} />
                </div>
                <div style={{ width: '25%' }}>
                  <div>
                    <span>Created at: </span>
                    <span>
                      <Moment format='HH:mm Do MMM YYYY'>{task.created}</Moment>
                    </span>
                  </div>
                  <div>
                    <span>Updated at: </span>
                    <span>
                      <Moment format='HH:mm Do MMM YYYY'>{task.updated}</Moment>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskDetail;
