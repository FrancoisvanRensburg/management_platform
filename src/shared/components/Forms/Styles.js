import styled from 'styled-components';

import { color, font } from '../../utils/Styles';

export const InputElement = styled.input`
  height: 32px;
  width: ${(inputProps) => inputProps.width}%;
  /* padding: 0 0 0 7px; */
  text-indent: 7px;
  border-radius: 3px;
  border: none;
  color: ${color.textDark};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;

export const InputError = styled.span`
  color: ${color.buttonPink};
  ${font.size(12)}
`;

export const SelectElement = styled.select`
  height: 32px;
  width: ${(inputProps) => inputProps.width}%;
  /* padding: 0 0 0 7px; */
  text-indent: 7px;
  border-radius: 3px;
  border: none;
  color: ${color.textDark};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;
