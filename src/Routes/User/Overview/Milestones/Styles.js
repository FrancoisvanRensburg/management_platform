import styled from 'styled-components';

import { color, radius, shadow } from '../../../../shared/utils/Styles';

export const MilestonesWrapper = styled.div`
  padding: 15px 10px;
  width: 100%;
  height: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  display: block;
  box-shadow: ${shadow.cardShadow};
  box-sizing: border-box;
`;

export const MilestonesContainer = styled.div`
  display: flex;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 20px;
`;

export const Table = styled.table`
  width: 50%;
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
