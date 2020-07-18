import React from 'react';
import moment from 'moment';
import Moment from 'react-moment';

import ListItem from './ListItem';

import { ChartWrapper, ChartValues, Grid, ChartBars, Item } from './Styles';

import { color, radius } from '../../../../shared/utils/Styles';

const TaskList = ({ tasks }) => {
  // current week
  const startOfWeek = moment().startOf('isoweek');
  const endOfWeek = moment().endOf('isoweek');
  const currentDay = moment();

  // next week
  const startOfNextWeek = moment().add(1, 'weeks').startOf('isoweek');
  const endOfNextWeek = moment().add(1, 'weeks').endOf('isoweek');

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            textAlign: 'center',
            margin: '0 10px 0 0',
            padding: '10px 0 15px 0',
            width: '50%',
          }}
        >
          This week, {'('}
          <Moment format='Do, MMMM'>{startOfWeek}</Moment> -{' '}
          <Moment format='Do, MMMM'>{endOfWeek}</Moment>
          {') - '}
          <Moment format='dddd'>{currentDay}</Moment>
        </div>
        <div
          style={{
            textAlign: 'center',
            margin: '0 0 0 10px',
            padding: '10px 0 15px 0',
            width: '50%',
            backgroundColor: `${color.backgroundDark}`,
          }}
        >
          {' '}
          Next week, {'('}
          <Moment format='dddd, Do'>{startOfNextWeek}</Moment> -{' '}
          <Moment format='dddd, Do'>{endOfNextWeek}</Moment>
          {')'}
        </div>
      </div>
      <Grid>
        <Item>
          <ChartWrapper>
            <ChartValues>
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
              <li>SUN</li>
            </ChartValues>
            <ChartBars>
              {tasks
                .filter((task) => moment(task.actualstartdate) < endOfWeek)
                .filter((task) => moment(task.actualstartdate) > startOfWeek)
                .map((task) => (
                  <ListItem key={task._id} task={task} />
                ))}
            </ChartBars>
          </ChartWrapper>
        </Item>
        <Item
          style={{
            backgroundColor: `${color.backgroundDark}`,
            borderRadius: `${radius.cardRadius}`,
          }}
        >
          <ChartWrapper>
            <ChartValues>
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
              <li>SUN</li>
            </ChartValues>
            <ChartBars>
              {tasks
                .filter((task) => moment(task.actualstartdate) < endOfNextWeek)
                .filter(
                  (task) => moment(task.actualstartdate) > startOfNextWeek
                )
                .map((task) => (
                  <ListItem key={task._id} task={task} />
                ))}
            </ChartBars>
          </ChartWrapper>
        </Item>
      </Grid>
    </>
  );
};

export default TaskList;
