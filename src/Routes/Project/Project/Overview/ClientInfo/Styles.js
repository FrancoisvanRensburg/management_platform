import styled from 'styled-components';

import {
  color,
  radius,
  font,
  shadow,
} from '../../../../../shared/utils/Styles';

export const ClientWrapper = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  min-height: 250px;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  box-sizing: border-box;
  box-shadow: ${shadow.cardShadow};
`;

export const ComponentHeader = styled.h2`
  text-align: center;
`;

export const SubHeader = styled.div`
  display: flex;
  margin: 7px 20px;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
  border-collapse: collapse;
`;

export const THead = styled.th`
  text-align: left;
  text-indent: 10px;
  ${font.size(18)}
`;

export const Tcell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 10px;
  padding: 2px 0;
`;
