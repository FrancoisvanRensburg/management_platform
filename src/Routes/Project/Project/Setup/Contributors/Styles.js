import styled from 'styled-components';

import {
  color,
  font,
  radius,
  shadow,
} from '../../../../../shared/utils/Styles';

export const ContributorsContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  box-shadow: ${shadow.cardShadow};
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
`;

export const Header = styled.h2`
  text-align: center;
  margin: 10px 0;
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 0;
`;

export const ContributorList = styled.ul`
  max-height: 330px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  padding: 10px 3px 7px;
  border-bottom: 0.5px solid ${color.tabBackgroundLight};
`;
