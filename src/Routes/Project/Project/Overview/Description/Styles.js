import styled from 'styled-components';

import { color, radius } from '../../../../../shared/utils/Styles';

export const DescriptionContainer = styled.div`
  width: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  box-sizing: border-box;
  padding: 15px;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 0 10px;
`;

export const DescriptionText = styled.div`
  margin: 7px 10px;
`;
