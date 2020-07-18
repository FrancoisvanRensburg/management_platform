import styled from 'styled-components';

import { color, radius } from '../../../../../shared/utils/Styles';

export const BudgetContainer = styled.div`
  width: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  box-sizing: border-box;
  padding: 15px;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 0 10px;
`;

export const ProgressContainer = styled.div`
  margin: 0 10px;
`;

export const ResourceBudgetProgress = styled.div`
  display: block;
  height: 20px;
  margin: 0;
`;

export const ProjectBudgetProgress = styled.div`
  display: block;
  height: 20px;
  margin: 0 0 10px 0;
`;
