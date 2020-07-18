import styled from 'styled-components';

import { color, font, radius } from '../../../../../shared/utils/Styles';

export const CardItem = styled.div`
  width: 100%;
  background-color: ${color.backgroundLightPrimary};
  margin: 8px 0;
  padding: 8px;
  box-sizing: border-box;
  border-radius: ${radius.taskRadius};

  &:hover {
    cursor: pointer;
    background-color: ${color.tabBackgroundLight};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskProject = styled.div`
  text-align: left;
  opacity: 0.5;
  margin: 8px 0 2px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
