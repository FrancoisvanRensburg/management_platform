import styled from 'styled-components';

import {
  progressBarColors,
  radius,
  color,
  font,
} from '../../../../shared/utils/Styles';

export const TaskProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TaskProgressWrapper = styled.div`
  width: 50%;
  height: 40px;
  margin: 0 5%;
`;

export const ComponentHeader = styled.h2`
  text-align: center;
  margin: 0 20px 15px 20px;
`;

export const TaskFieldInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 6.5%;
`;

export const FormFieldOne = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;

  & span {
    margin: 0 5px 0 0;
  }
`;

export const FormFieldTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
`;

export const Hours = styled.span`
  margin: 0 5px 0 0;
  padding: 7px 15px;
  background-color: ${progressBarColors.greenComponent};
  border-radius: ${radius.cardRadius};
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 6.5% 0 0;
`;

export const TextareaInput = styled.div`
  margin: 0 6.5%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  height: 450px;
  padding: 0 0 20px 0;
  border-radius: ${radius.cardRadius};
`;

export const ChartValues = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 0;
  padding: 0;

  & li {
    flex: 1;
    text-align: center;
  }

  & li:not(:last-child) {
    position: relative;
  }

  & li:not(:last-child)::before {
    content: '';
    position: absolute;
    right: 0;
    height: 450px;
    border-right: 2px solid ${color.backgroundDark};
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
`;

export const ChartBars = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  & li {
    position: relative;
  }
`;

export const ListItemComponent = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 7px 0;
  width: 100%;
  background-color: ${color.backgroundLightPrimary};
  border-top-left-radius: ${radius.progressRadius};
  border-top-right-radius: ${radius.progressRadius};
  ${font.size(12)};

  &:hover {
    cursor: pointer;
  }
`;

export const ComponentProgress = styled.div`
  height: 10px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;
