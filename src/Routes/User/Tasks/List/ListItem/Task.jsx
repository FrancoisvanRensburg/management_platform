import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import Moment from 'react-moment';

import { updateTask } from '../../../../../Redux/actions/projectActions';
import { getUserTasks } from '../../../../../Redux/actions/userActions';

import Comment from './Comment';
import CommentItem from './CommentItem';
import Input from '../../../../../shared/components/Input';
import Textarea from '../../../../../shared/components/Textarea';
import { SubmitButton } from '../../../../../shared/components/Buttons';
import ProgressBar from '../../../../../shared/components/ProgressBar';
import Spinner from '../../../../../shared/components/Spinner/Spinner';

import {
  TaskProgressContainer,
  TaskProgressWrapper,
  ComponentHeader,
  TaskFieldInput,
  FormFieldOne,
  FormFieldTwo,
  Hours,
  TextareaInput,
  SubmitSection,
} from '../Styles';

const Task = ({ updateTask, getUserTasks }) => {
  const task = useSelector((store) => store.user.task);
  const [formData, setFormData] = useState({
    progress: '',
    description: '',
  });

  const { progress, description } = formData;

  useEffect(() => {
    setFormData({
      progress: task === null || !task.progress ? '' : task.progress,
      description: task === null || !task.description ? '' : task.description,
    });
  }, [task]);

  const handleChange = (name, value) => {
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    updateTask(task._id, formData);
    // refseshPage();
  };
  return (
    <Fragment>
      {task === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <ComponentHeader>{task.taskname}</ComponentHeader>
          <form onSubmit={submitForm}>
            <TaskProgressContainer>
              <span>
                <Moment format='YYYY/MM/DD'>{task.actualstartdate}</Moment>
              </span>
              <TaskProgressWrapper>
                <ProgressBar percentage={progress} />
              </TaskProgressWrapper>
              <span>
                <Moment format='YYYY/MM/DD'>{task.actualenddate}</Moment>
              </span>
            </TaskProgressContainer>
            <TaskFieldInput>
              <FormFieldOne>
                <span>Percentage Report</span>
                <Input
                  name='progress'
                  type='number'
                  width={50}
                  value={progress}
                  onChange={handleChange}
                />
              </FormFieldOne>
              <FormFieldTwo>
                {/* hours user will be the booked hours on the timesheets */}
                {/* The total hours available is equal to the effort assigned to the task */}
                <Hours>7/{task.effort}</Hours>
                <span>
                  Hours <br /> used
                </span>
              </FormFieldTwo>
            </TaskFieldInput>
            <TextareaInput>
              <label htmlFor='description'>Description</label>
              <Textarea
                name='description'
                placeholder='Task description'
                value={description}
                onChange={handleChange}
              />
            </TextareaInput>
            <SubmitSection onClick={() => getUserTasks()}>
              <SubmitButton text={'save'} />
            </SubmitSection>
          </form>
          <Comment task={task} />
          {task.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

Task.propTypes = {
  updateTask: PropTypes.func.isRequired,
  getUserTasks: PropTypes.func.isRequired,
};

export default connect(null, { updateTask, getUserTasks })(Task);
