import styled from 'styled-components';

import { color } from '../../../shared/utils/Styles';

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0 0 0;
`;

export const AddDescription = styled.button`
  color: ${color.textParagraph};
  text-decoration: underline;
  margin: 10px 12.5% 15px;
  &:hover {
    cursor: pointer;
    color: ${color.textSubHeading};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  transition: bounce 0.5s ease-in;
  margin-bottom: 35px;
`;
