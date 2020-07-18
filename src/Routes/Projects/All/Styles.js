import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color, radius } from '../../../shared/utils/Styles';

export const StyledLink = styled(Link)`
  background-color: ${color.buttonGreen};
  border-radius: ${radius.buttonRadius};
  padding: 7px 20px;
  color: ${color.textHeading};

  &:hover {
    background-color: ${color.buttonGreenHover};
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px 10px 15px;
  background-color: ${color.backgroundLightPrimary};
  border-radius: ${radius.cardRadius};
  margin: 10px 0;
`;
