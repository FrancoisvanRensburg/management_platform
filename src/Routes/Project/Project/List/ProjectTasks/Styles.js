import styled from 'styled-components';

import { color, radius } from '../../../../../shared/utils/Styles';

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
  margin: 10px 10px 0 10px;
  border-collapse: collapse;
  box-sizing: border-box;
`;

export const THead = styled.th`
  margin: 10px 0;
  /* text-indent: 10px; */
  text-align: left;
`;

export const Tcell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* text-indent: 10px; */
  margin: 10px 0;
  padding: 10px 0;
`;
