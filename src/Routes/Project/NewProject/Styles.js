import styled from 'styled-components';

import { color } from '../../../shared/utils/Styles';

export const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const FieldInput = styled.div``;

export const SubmitSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 0 0;
`;

export const Label = styled.div`
  margin: 0 10px;
`;

export const UploadFileInput = styled.input`
  display: none;
`;

export const UploadFileLabel = styled.label`
  height: 38px;
  background-color: ${color.buttonPink};
  width: 150px;
  line-height: 38px;
  text-align: center;
  border-radius: 50px;
  font-size: 1.1em;

  &:hover {
    cursor: pointer;
    height: 34px;
    background-color: transparent;
    width: 146px;
    line-height: 34px;
    text-align: center;
    border-radius: 50px;
    border: 2px solid ${color.buttonPink};
    font-size: 1.1em;
    color: ${color.buttonPink};
  }
`;

export const UploadSection = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
`;
