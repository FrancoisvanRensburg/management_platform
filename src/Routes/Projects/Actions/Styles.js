import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { color, radius } from '../../../shared/utils/Styles';

export const ProjectsTabs = styled.div`
  height: 29px;
  margin-top: 15px;
`;

export const NavLinks = styled(NavLink)`
  border-top-left-radius: ${radius.buttonRadius};
  border-top-right-radius: ${radius.buttonRadius};
  background-color: ${color.tabBackgroundLight};
  margin: 7px 5px;
  height: 40px;
  &:nth-child(2) {
    padding: 7px 41.82px;
  }

  &:nth-child(1) {
    padding: 7px 35.32px;
  }
  &:hover {
    color: ${color.textHoverAmber};
    background-color: ${color.tabBackgroundDark};
  }
`;
