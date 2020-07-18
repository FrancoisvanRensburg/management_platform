import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import { ProjectWrapper, ComponentHeader, Table, THead, Tcell } from './Styles';

const ProjectInfo = ({
  project: { actualstartdate, actualenddate, client },
}) => {
  const endDate = moment(actualenddate);
  const startDate = moment(actualstartdate);

  return (
    <ProjectWrapper>
      <ComponentHeader>Project detail</ComponentHeader>
      <Table>
        <thead>
          <tr>
            <THead>Start date:</THead>
            <THead>End date:</THead>
            <THead>Duration:</THead>
            <THead>Client:</THead>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Tcell>
              <Moment format='YYYY/MM/DD'>{actualstartdate}</Moment>
            </Tcell>
            <Tcell>
              <Moment format='YYYY/MM/DD'>{actualenddate}</Moment>
            </Tcell>
            <Tcell>{endDate.diff(startDate) / (24 * 3600 * 1000)} days</Tcell>
            {!client ? <Tcell>n/a</Tcell> : <Tcell>{client.name}</Tcell>}
          </tr>
        </tbody>
      </Table>
    </ProjectWrapper>
  );
};

export default ProjectInfo;
