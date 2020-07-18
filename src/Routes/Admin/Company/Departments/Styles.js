import styled from 'styled-components';

import { radius, color, font } from '../../../../shared/utils/Styles';

export const ItemsWrapper = styled.div`
  width: 100%;
  height: 112px;
  border-radius: ${radius.cardRadius};
  background-color: #eeeeee;
  margin: 20px 0;
  padding: 5px;
`;

export const ItemText = styled.span`
  padding: 1px 5px;
  border-radius: 10px;
  background-color: ${color.tabBackgroundLight};
  color: ${color.textParagraph};
  margin: 4px 8px;
`;

export const InputElement = styled.input`
  height: 100%;
  width: 40%;
  text-indent: 7px;
  border-radius: 3px;
  border: none;
  color: ${color.textParagraph};
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;
