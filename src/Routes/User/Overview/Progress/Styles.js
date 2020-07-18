import styled from 'styled-components';

import { color, radius, font, shadow } from '../../../../shared/utils/Styles';

export const ProgressContainer = styled.div`
  height: 100%;
  min-height: 205.6px;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  display: block;
  padding: 15px 10px;
  box-shadow: ${shadow.cardShadow};
  box-sizing: border-box;
`;

export const ProgressWrapper = styled.div`
  display: block;
  height: 40px;
  margin: 10px 15px;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 20px;
`;

export const ProgressFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const Remaining = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Count = styled.div`
  ${font.size(64)}
`;

export const Text = styled.div`
  ${font.size(20)}
  margin-left: 5px;
`;
