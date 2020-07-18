import styled from 'styled-components';

import { color, font, radius } from '../../../../../../shared/utils/Styles';

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 7px;
`;

export const CommentSection = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const CommentFormSection = styled.div`
  width: 50%;
`;

export const CommentThreadContainer = styled.div`
  width: 50%;
  background-color: ${color.backgroundMedium};
  border-radius: ${radius.cardRadius};
  padding: 7px 5px;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 178.7px;
`;

export const CommentItemStyles = styled.div`
  border: 0.5px solid ${color.buttonPink};
  margin: 0 20px 12px 5px;
  border-radius: ${radius.containerRadius};
  padding: 7px 5px;
`;

export const CommentItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8.5px;
`;

export const CommenterName = styled.span`
  ${font.bold}
  ${color.textTitle}
`;
export const CommentDate = styled.span`
  ${font.medium}
  ${color.textSubHeading}
`;
