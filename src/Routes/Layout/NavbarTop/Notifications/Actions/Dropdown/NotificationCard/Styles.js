import styled from 'styled-components';

import { color, font, radius } from '../../../../../../../shared/utils/Styles';

export const NotificationItem = styled.div`
  height: 80px;
  background-color: ${color.backgroundLightPrimary};
  margin: 8px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: ${radius.taskRadius};

  &:hover {
    cursor: pointer;
    background-color: ${color.tabBackgroundLight};
  }
`;
