import styled from 'styled-components';

import { color, font, radius } from '../../../../shared/utils/Styles';

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 7px;
`;

export const CommentSection = styled.div`
  height: 740px;
`;

export const CommentFormSection = styled.div`
  margin-top: 20px;
`;

export const CommentInnerContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  height: 100%;
`;

export const CommentThreadContainer = styled.div`
  background-color: ${color.backgroundLightPrimary};
  border-radius: ${radius.containerRadius};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 10px;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 672.1px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.6);
`;

export const CommentItemStyles = styled.div`
  background-color: ${color.backgroundDark};
  margin: 0 60px 12px 5px;
  border-radius: ${radius.cardRadius};
  padding: 7px 5px;
  box-shadow: inset 0px 0px 3.5px rgba(141, 141, 141, 0.45);
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
  margin-right: 10px;
`;
