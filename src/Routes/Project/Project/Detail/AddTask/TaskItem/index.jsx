import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getTask } from '../../../../../../Redux/actions/projectActions';

import { TaskList } from '../Styles';

const TaskItems = ({ task, getTask }) => {
  return (
    <Fragment>
      <TaskList onClick={() => getTask(task._id)}>{task.taskname}</TaskList>
    </Fragment>
  );
};

TaskItems.propTypes = {
  getTask: PropTypes.func.isRequired,
};

export default connect(null, { getTask })(TaskItems);
