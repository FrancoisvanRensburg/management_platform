import styled from 'styled-components';

import {
  color,
  radius,
  font,
  shadow,
} from '../../../../../shared/utils/Styles';

export const ProgressContainer = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  box-sizing: border-box;
  box-shadow: ${shadow.cardShadow};
`;

export const ProgressWrapper = styled.div`
  display: block;
  height: 40px;
  margin: 10px 15px;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
`;

export const ProgressFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const ProjectEndDate = styled.div`
  span:nth-child(1) {
    ${font.size(18)}
  }
  span:nth-child(2) {
    ${font.size(24)}
  }
`;
