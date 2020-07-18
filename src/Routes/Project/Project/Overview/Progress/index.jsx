import React from 'react';
import Moment from 'react-moment';

import ProgressBar from '../../../../../shared/components/ProgressBar';
import { progress } from '../../../../../shared/hooks/projectProgress';

import {
  ProgressContainer,
  ProgressWrapper,
  ComponentHeader,
  ProgressFooter,
  Remaining,
  Count,
  Text,
  ProjectEndDate,
} from './Styles';

const ProjectProgress = ({ project: { tasks, actualenddate } }) => {
  return (
    <ProgressContainer>
      <ComponentHeader>Progress</ComponentHeader>
      <ProgressWrapper>
        <ProgressBar percentage={progress(tasks)} />
      </ProgressWrapper>
      <ProgressFooter>
        <Remaining>
          <Count>{tasks.filter((e) => e.progress < 100).length}</Count>
          <Text>
            Tasks <br /> Remaining
          </Text>
        </Remaining>
        <Remaining>
          <Count>{tasks.filter((e) => e.progress === 100).length}</Count>
          <Text>
            Tasks <br /> completed
          </Text>
        </Remaining>
        <ProjectEndDate>
          <span>End date:</span>
          <span>
            <Moment format='YYYY/MM/DD'>{actualenddate}</Moment>
          </span>
        </ProjectEndDate>
      </ProgressFooter>
    </ProgressContainer>
  );
};

export default ProjectProgress;
