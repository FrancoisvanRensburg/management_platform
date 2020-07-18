import styled from 'styled-components';

import { color, radius, font } from '../../../../shared/utils/Styles';

export const MonthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const WeekWrapper = styled.div`
  width: 25%;
  text-align: center;
  height: 100%;
  background-color: ${color.backgroundDark};
  padding: 8px;
  border-radius: ${radius.cardRadius};
`;
