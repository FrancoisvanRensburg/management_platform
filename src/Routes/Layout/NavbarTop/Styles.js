import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, zIndexValues } from '../../../shared/utils/Styles';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const NotLogoLinks = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  min-width: 250px;
  justify-content: space-between;
  z-index: ${zIndexValues.navLeft};
`;

export const StyledLink = styled(Link)`
  color: ${color.buttonPurple};
  ${font.medium}
  ${font.size(18)}
  &:hover {
    cursor: pointer;
  }
`;
