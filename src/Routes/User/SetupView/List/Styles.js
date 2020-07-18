import styled from 'styled-components';

import { color, radius } from '../../../../shared/utils/Styles';

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
  margin: 10px 10px 0 10px;
  border-collapse: collapse;
`;

export const THead = styled.th`
  margin: 10px 0;
  border-bottom: 10px solid ${color.backgroundDark};
  text-align: left;
`;

export const Tcell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 10px;
  margin: 10px 0;
  border-bottom: 10px solid ${color.backgroundDark};
  padding: 10px 0;
  background-color: ${color.backgroundLightPrimary};
`;
