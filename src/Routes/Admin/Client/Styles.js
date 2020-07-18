import styled from 'styled-components';

import { color, radius, font } from '../../../shared/utils/Styles';

export const ClientsBoard = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.div`
  margin-bottom: 10px;
  &h2 {
    margin: 0 0 10px 0;
    ${font.bold}
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputField = styled.div`
  width: 47%;
  margin: 7px 0;
`;

export const FormGroup = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
`;

export const ButtonAdd = styled.div`
  width: 150px;
  height: 35px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${font.bold}
  ${font.size(20)}
  color: ${color.textDark};
  background-color: ${color.buttonGreen};
  border-radius: ${radius.buttonRadius};
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${color.buttonGreenHover};
  }
`;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 0 0 0;
`;
