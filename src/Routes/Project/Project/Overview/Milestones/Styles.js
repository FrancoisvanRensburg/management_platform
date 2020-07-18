import styled from 'styled-components';

import { color, radius, font } from '../../../../../shared/utils/Styles';

export const MilestonesContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  box-sizing: border-box;
  padding: 15px 10px;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
`;

export const ComponentSubheader = styled.h4`
  text-align: center;
  ${font.size(17)}
  ${font.medium}
  margin: 40px 0 7px 0;
`;

export const ListItem = styled.ul`
  & li {
    margin: 7px auto;
    padding: 3px 0;
    background-color: ${color.backgroundLightPrimary};
    border-radius: ${radius.cardRadius};
  }
`;
