import styled from 'styled-components';

import { color, font } from '../../utils/Styles';

export const StyledSelect = styled.div`
  height: 32px;
  width: 100%;
`;

export const SelectElement = styled.select`
  height: 100%;
  width: ${(inputProps) => inputProps.width}%;
  padding: 0 0 0 7px;
  border-radius: 3px;
  border: none;
  color: ${color.textDark};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;

export const OptionElement = styled.option`
  background-color: ${color.backgroundLightPrimary};
`;
