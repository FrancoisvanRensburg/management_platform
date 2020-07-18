import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, radius, font } from '../../../shared/utils/Styles';

export const ProjectsContainer = styled.div`
  width: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
  background-color: ${color.buttonGreen};
  border-radius: ${radius.buttonRadius};
  padding: 7px 20px;
  color: ${color.textHeading};

  &:hover {
    background-color: ${color.buttonGreenHover};
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  white-space: nowrap;
  border-collapse: collapse;
`;

export const THead = styled.th`
  border-bottom: 10px solid ${color.backgroundMedium};
  text-align: left;
  text-indent: 10px;
  ${font.size(22)}
`;

export const Tcell = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 10px;
  border-bottom: 10px solid ${color.backgroundMedium};
  padding: 10px 0;
  background-color: ${color.backgroundLightPrimary};
`;
