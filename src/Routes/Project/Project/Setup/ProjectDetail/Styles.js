import styled from 'styled-components';

import {
  color,
  font,
  radius,
  shadow,
} from '../../../../../shared/utils/Styles';

export const ProjectDetailContainer = styled.div`
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
