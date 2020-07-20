import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { color, font } from '../../utils/Styles';

const StyledAlert = styled.div`
  ${font.size(18)};
  color: ${color.buttonPink};
  ${font.medium};
  position: absolute;
`;

const Alert = () => {
  const alerts = useSelector((store) => store.alert);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => <StyledAlert key={alert.id}>{alert.msg}</StyledAlert>)
  );
};

export default Alert;
