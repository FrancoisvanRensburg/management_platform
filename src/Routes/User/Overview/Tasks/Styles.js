import styled from 'styled-components';

import { color, radius, shadow } from '../../../../shared/utils/Styles';

export const TasksWrapper = styled.div`
  height: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  display: block;
  box-sizing: border-box;
  padding: 15px 10px;
  box-shadow: ${shadow.cardShadow};
`;

export const ComponentHeader = styled.h2`
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
  border-collapse: collapse;
`;

export const THead = styled.th`
  border-bottom: 10px solid ${color.backgroundDark};
  text-align: left;
  text-indent: 10px;
`;

export const Tcell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 10px;
  border-bottom: 10px solid ${color.backgroundDark};
  background-color: ${color.backgroundLightPrimary};
`;
