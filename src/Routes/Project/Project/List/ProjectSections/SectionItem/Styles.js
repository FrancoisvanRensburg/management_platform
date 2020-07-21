import styled from 'styled-components';

import { color, radius, font } from '../../../../../../shared/utils/Styles';

export const SectionCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${radius.cardRadius};
  margin: 1px 0;
  padding: 7px 16px 7px 12px;
  background-color: ${color.backgroundLightPrimary};
`;
