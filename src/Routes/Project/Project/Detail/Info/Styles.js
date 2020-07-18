import styled from 'styled-components';

import { color, radius } from '../../../../../shared/utils/Styles';

export const ProjectWrapper = styled.div`
  padding: 15px 0;
  width: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  margin: 0 10px 10px 0;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 20px;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
  margin: 10px 10px 0 10px;
`;

export const THead = styled.th`
  width: 22.5%;
  text-align: left;
`;

export const Tcell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
