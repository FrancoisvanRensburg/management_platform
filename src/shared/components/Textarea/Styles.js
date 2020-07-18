import styled from 'styled-components';

import { color, font } from '../../utils/Styles';

export const StyledTextarea = styled.div`
  width: 100%;
`;

export const TextareaElement = styled.textarea`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}%;
  padding: 5px 0;
  border-radius: 3px;
  text-indent: 7px;
  border: none;
  color: ${color.textDark};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;
