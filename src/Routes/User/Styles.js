import styled from 'styled-components';

import { color, radius, shadow } from '../../shared/utils/Styles';

export const UserPage = styled.div`
  position: absolute;
  top: 30px;
  left: 70px;
  width: 95%;
`;

export const Container = styled.div`
  background-color: ${color.backgroundMedium};
  height: auto;
  min-height: 700px;
  padding: 20px;
  border-radius: ${radius.containerRadius};
  box-shadow: ${shadow.container};
`;
