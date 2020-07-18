import styled from 'styled-components';

import { progressBarColors, radius } from '../../../shared/utils/Styles';

export const ProgressBarComponent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${progressBarColors.greenComponent};
  border-radius: ${radius.progressRadius};
`;

export const ProgressFiller = styled.div`
  background-color: ${progressBarColors.greenFiller};
  height: 100%;
  width: ${(props) => props.percentage}%;
  transition: width 0.3s ease-in-out;
  border-radius: inherit;
`;
