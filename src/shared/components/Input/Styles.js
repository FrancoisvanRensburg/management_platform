import styled from 'styled-components';

import { color, font } from '../../utils/Styles';

export const StyledInput = styled.div`
  /* position: relative; */
  /* display: inline-block; */
  height: 32px;
  width: 100%;
`;

export const InputElement = styled.input`
  height: 100%;
  width: ${(inputProps) => inputProps.width}%;
  /* padding: 0 0 0 7px; */
  text-indent: 7px;
  border-radius: 3px;
  border: none;
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;

export const InputError = styled.span`
  color: ${color.buttonPink};
  ${font.size(12)}
`;

export const StyledLabel = styled.label`
  margin: 0 7px 0 0;
  ${font.size(15)}
`;
