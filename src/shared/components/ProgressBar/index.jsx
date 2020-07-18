import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ProgressBarComponent, ProgressFiller } from './Styles';

const propTypes = {
  percentage: PropTypes.number,
};

const defaultProps = {
  percentage: 0,
};

const ProgressBar = ({ percentage }) => {
  const limits = (min, value, max) => {
    return Math.min(Math.max(min, value), max);
  };
  return (
    <Fragment>
      <ProgressBarComponent>
        <ProgressFiller percentage={limits(0, percentage, 100)} />
      </ProgressBarComponent>
    </Fragment>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
