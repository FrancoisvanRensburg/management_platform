import styled from 'styled-components';

import { font, color } from '../../utils/Styles';

export const Svg = styled.svg`
  display: block;
  height: 100%;
  width: 100%;
`;

export const BgCircle = styled.circle`
  fill: none;
`;

export const InCircle = styled.circle`
  fill: none;
`;

export const CircleText = styled.text`
  font-size: 0.7em;
  font-weight: ${font.bold};
  text-anchor: middle;
  fill: ${color.textSubHeading};
`;
