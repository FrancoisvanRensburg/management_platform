import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Svg, BgCircle, InCircle, CircleText } from './Styles';

const CircleProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
}) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';
  }, [setOffset, progress, circumference, offset]);
  return (
    <div>
      <Svg width={size} height={size}>
        <BgCircle
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <InCircle
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <CircleText x={center} y={center + 4}>
          {progress}%
        </CircleText>
      </Svg>
    </div>
  );
};

CircleProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  circleOneStroke: PropTypes.string.isRequired,
  circleTwoStroke: PropTypes.string.isRequired,
};

export default CircleProgressBar;
