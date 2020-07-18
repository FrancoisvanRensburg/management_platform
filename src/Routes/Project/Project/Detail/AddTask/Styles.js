import styled from 'styled-components';

import { color, radius, font } from '../../../../../shared/utils/Styles';

import { MyTextInput } from '../../../../../shared/components/Forms';

export const TaskList = styled.li`
  border-bottom: 1px solid ${color.backgroundDark};
  ${font.size(18)};
  margin: 10px 20px;
  text-indent: 8px;

  &:hover {
    cursor: pointer;
  }

  &:nth-last-child(1) {
    margin: 10px 20px 0 20px;
  }
`;

export const TaskContainer = styled.div`
  padding: 15px 0;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  margin: 0 10px 0 0;
`;

export const MyTextInputStyled = styled(MyTextInput)`
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 20px;
`;

export const TaskWrapper = styled.div`
  margin: 10px 20px;
  background-color: ${color.backgroundLightPrimary};
  flex-grow: 1;
  padding: 15px 0 5px 0;
  border-radius: ${radius.progressRadius};
`;

export const FormWrapper = styled.div`
  margin: 0 13px;
  border-bottom: 1px solid ${color.backgroundDark};
  margin: 0 20px 10px 20px;

  & input {
    background-color: transparent;
    color: ${color.textHeading};
    ${font.size(18)};
  }
`;
