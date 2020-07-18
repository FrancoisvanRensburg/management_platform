import styled from 'styled-components';

import { DatePickerField } from '../../../../../shared/components/DatePicker';

import { color, radius, font } from '../../../../../shared/utils/Styles';

export const TaskDetailContainer = styled.div`
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  padding: 20px 0;
  margin-left: 10px;
  flex-grow: 1;
`;

export const TaskDetailSubContainer = styled.div`
  background-color: ${color.backgroundDark};
  border-radius: ${radius.cardRadius};
  margin: 0 20px;
  padding: 10px 20px;
  height: 96%;
`;

export const DatesNEffort = styled.div`
  display: flex;
  align-items: center;

  /* & div:not(:last-child) {
    border-right: 2px solid red;
  } */
`;

export const AssigneeWrapper = styled.div`
  width: 40%;
  padding: 0 10px 0 0;
  border-right: 2px solid ${color.tabBackgroundLight};
`;

export const ProjectWrapper = styled.div`
  /* margin: 10px 0; */
  padding: 10px 0;
  border-bottom: 3px solid ${color.tabBackgroundLight};

  & span {
    ${font.bold}
    margin-left: 7px;
  }
`;

export const TaskNameWrapper = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid ${color.tabBackgroundLight};

  & span {
    ${font.medium}
    ${font.size(32)}
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 10px 0;
  height: 150px;
  width: 97.5%;
  margin-bottom: 17px;
`;

export const TimeStamp = styled.div`
  padding: 10px 0;
  border-top: 1px solid ${color.tabBackgroundLight};
  border-bottom: 1px solid ${color.tabBackgroundLight};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    ${font.bold}
    margin-left: 7px;
  }
`;

export const DatePicker = styled(DatePickerField)`
  background-color: ${color.backgroundLightPrimary};
  border: none;
  border-radius: 3px;
  /* width: 100%; */
  height: 36px;
  color: ${color.textParagraph};

  &::placeholder {
    color: ${color.textParagraph};
  }
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 10px;
`;

export const Label = styled.div`
  margin: 0 10px 7px;
`;

export const InputFieldSingle = styled.div`
  margin: 20px 10px 20px 17px;
`;

export const InputFieldDouble = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin: 20px 10px 20px 17px;
  /* width: 100%; */
`;
