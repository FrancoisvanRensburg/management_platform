import styled from 'styled-components';

import { color, radius } from '../../../../shared/utils/Styles';

export const ClientsContainer = styled.div`
  width: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  display: block;
  padding: 15px 0;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 20px;
`;

export const Table = styled.table`
  width: 97.5%;
  table-layout: fixed;
  white-space: nowrap;
  margin: 10px;
  border-collapse: collapse;
`;

export const THead = styled.th`
  width: 22.5%;
  margin: 10px 0;
  border-bottom: 10px solid ${color.backgroundDark};
  text-align: left;
  text-indent: 10px;
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

export const ClientView = styled.div`
  padding: 7px 0;
  width: 100px;
  text-align: center;
  border-radius: ${radius.buttonRadius};
  background-color: ${color.buttonGreen};
  color: black;

  &:hover {
    cursor: pointer;
  }
`;
