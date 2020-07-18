import React, { useState, useEffect, Fragment } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { color } from '../../../../../shared/utils/Styles';

import {
  getTask,
  updateTask,
} from '../../../../../Redux/actions/projectActions';

import {
  MyTextInput,
  MyTextarea,
} from '../../../../../shared/components/Forms';
import CustomDropdown from '../../../../../shared/components/Dropdown';
import { SubmitButton } from '../../../../../shared/components/Buttons';

import TaskCommentBox from './Comments';

import {
  TaskDetailContainer,
  TaskDetailSubContainer,
  DatesNEffort,
  AssigneeWrapper,
  ProjectWrapper,
  TaskNameWrapper,
  DescriptionWrapper,
  TimeStamp,
  SubmitSection,
  Label,
  DatePicker,
} from './Styles';

import 'react-datepicker/dist/react-datepicker.css';

// Data for priority
const prty = [
  { _id: 'tskprty1', value: '3', name: 'High' },
  { _id: 'tskprty2', value: '2', name: 'Medium' },
  { _id: 'tskprty3', value: '1', name: 'Low' },
];

const cnstr = [
  { _id: 'tskcnstr1', value: 'asap', name: 'ASAP' },
  { _id: 'tskcnstr2', value: 'alap', name: 'ALAP' },
];

const TaskDetail = ({ project }) => {
  const task = useSelector((store) => store.project.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  return (
    <TaskDetailContainer>
      <TaskDetailSubContainer>
        <Formik
          enableReinitialize={true}
          initialValues={{
            assignee: task === null || !task.assignee ? '' : task.assignee,
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
            priority: task === null || !task.priority ? '' : task.priority,
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
            <div
              style={{
                display: 'flex',
                padding: '15px 0',
                borderBottom: `2px solid ${color.tabBackgroundLight}`,
              }}
            >
              <AssigneeWrapper>
                <CustomDropdown
                  name='assignee'
                  options={project.contributors}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option._id}
                />
              </AssigneeWrapper>
              <DatesNEffort>
                <div
                  style={{
                    padding: '0 10px',
                    borderRight: `1.5px solid ${color.tabBackgroundLight}`,
                  }}
                >
                  <DatePicker
                    name='actualstartdate'
                    showMonthDropdown
                    useShortMonthInDropdown
                    placeholderText='Start date'
                    className='date_picker'
                  />
                </div>
                <div
                  style={{
                    padding: '0 10px',
                    borderRight: `1.5px solid ${color.tabBackgroundLight}`,
                  }}
                >
                  <DatePicker
                    name='actualenddate'
                    showMonthDropdown
                    useShortMonthInDropdown
                    placeholderText='End date'
                  />
                </div>
                <div
                  style={{
                    padding: '0 10px',
                    borderRight: `1.5px solid ${color.tabBackgroundLight}`,
                  }}
                >
                  <MyTextInput
                    name='effort'
                    type='number'
                    placeholder='Effort (hrs)'
                  />
                </div>
                <div style={{ padding: '0 10px' }}>
                  <button style={{ backgroundColor: 'red' }} type='button'>
                    Details
                  </button>
                </div>
              </DatesNEffort>
            </div>
            <ProjectWrapper>
              <span>{project.projectname}</span>
              {project.section && (
                <span>
                  <span> {'>'} </span>
                  {project.section}
                </span>
              )}
            </ProjectWrapper>
            <TaskNameWrapper>
              <span>{task === null ? 'Task name' : task.taskname}</span>
            </TaskNameWrapper>
            <DescriptionWrapper>
              <MyTextarea name='description' placeholder='Task description' />
            </DescriptionWrapper>
            <TimeStamp>
              <div>
                <span>
                  Created at <strong>HH:MM</strong>
                </span>{' '}
                <br />
                <span>
                  Updated at <strong>HH:MM</strong>
                </span>
              </div>
              <SubmitButton text={'save'} />
            </TimeStamp>
          </Form>
        </Formik>
        <TaskCommentBox task={task} />
      </TaskDetailSubContainer>
    </TaskDetailContainer>
  );
};

export default TaskDetail;
{
  /* <TaskDetailContainer>
<Fragment>
  <ComponentHeader>
    {task === null ? 'No task selected' : task.taskname}
  </ComponentHeader>
  <Formik
    enableReinitialize={true}
    initialValues={{
      assignee: task === null || !task.assignee ? '' : task.assignee,
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
      duration: task === null || !task.duration ? '' : task.duration,
      priority: task === null || !task.priority ? '' : task.priority,
      effort: task === null || !task.effort ? '' : task.effort,
      constraintype:
        task === null || !task.constraintype ? '' : task.constraintype,
    }}
    onSubmit={(values, { resetForm, setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        console.log(values);
        setSubmitting(false);
      }, 400);
      // dispatch(updateTask(task._id, values));
      // resetForm({});
    }}
  >
    <Form>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <CustomDropdown
            name='assignee'
            options={project.contributors}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option._id}
          />
        </div>
        <div style={{ width: '30%' }}>
          <DatePicker
            name='actualstartdate'
            showMonthDropdown
            useShortMonthInDropdown
            placeholderText='Start date'
            className='date_picker'
          />
        </div>
        <div style={{ width: '20%' }}>
          <DatePicker
            name='actualenddate'
            showMonthDropdown
            useShortMonthInDropdown
            placeholderText='End date'
          />
        </div>
      </div>
      <InputFieldSingle>
        <div style={{ width: '100%', height: '100px' }}>
          <MyTextarea
            label='Description'
            name='description'
            placeholder='Task description'
          />
        </div>
      </InputFieldSingle>
      <InputFieldDouble>
        <div style={{ margin: '0 0 0 20%', width: '30%' }}>
          <MyTextInput label='Duration' name='duration' type='number' />
        </div>
      </InputFieldDouble>
      <InputFieldDouble>
        <div style={{ margin: '0 0 0 20%', width: '30%' }}>
          <MyTextInput label='Effort' name='effort' type='number' />
        </div>
      </InputFieldDouble>
      <InputFieldDouble>
        <div style={{ width: '30%' }}>
          <CustomDropdown
            name='priority'
            options={prty}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.value}
          />
        </div>
        <div style={{ margin: '0 0 0 20%', width: '30%' }}>
          <CustomDropdown
            name='constrainttype'
            options={cnstr}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.value}
          />
        </div>
      </InputFieldDouble>
      <InputFieldSingle>
        <Label htmlFor='predecessor'>Predecessor</Label>
        <div
          style={{
            height: '32px',
            width: '30%',
            backgroundColor: 'white',
            borderRadius: '3px',
          }}
        ></div>
      </InputFieldSingle>
      <SubmitSection>
        <SubmitButton text={'Update'} />
      </SubmitSection>
    </Form>
  </Formik>
</Fragment>
</TaskDetailContainer> */
}
