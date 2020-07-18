import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import ProgressBar from '../../../../shared/components/ProgressBar';

import {
  ProgressContainer,
  ProgressWrapper,
  ComponentHeader,
  ProgressFooter,
  Remaining,
  Count,
  Text,
} from './Styles';

const UserProgress = () => {
  const tasks = useSelector((store) => store.user.tasks);
  return (
    <ProgressContainer>
      <ComponentHeader>Progress</ComponentHeader>
      {
        <Fragment>
          {tasks === null ? (
            <div>Loading...</div>
          ) : (
            <>
              <ProgressWrapper>
                <ProgressBar
                  percentage={
                    tasks.length === 0
                      ? 0
                      : tasks.filter((e) => e.progress === 100).length /
                        tasks.filter((e) => e.progress < 100).length
                  }
                />
              </ProgressWrapper>
              <ProgressFooter>
                <Remaining>
                  <Count>
                    {!tasks ? 0 : tasks.filter((e) => e.progress < 100).length}
                  </Count>
                  <Text>
                    Tasks <br /> remaining
                  </Text>
                </Remaining>
                <Remaining>
                  <Count>
                    {!tasks
                      ? 0
                      : tasks.filter((e) => e.progress === 100).length}
                  </Count>
                  <Text>
                    Tasks <br /> completed
                  </Text>
                </Remaining>
              </ProgressFooter>
            </>
          )}
        </Fragment>
      }
    </ProgressContainer>
  );
};

export default UserProgress;
