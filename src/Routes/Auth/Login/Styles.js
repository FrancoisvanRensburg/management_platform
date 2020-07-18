import styled from 'styled-components';

import { color, radius } from '../../../shared/utils/Styles';

export const AuthContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const AuthBox = styled.div`
  margin: 80px auto;
  background-color: ${color.backgroundDark};
  width: 50%;
  height: 200px;
  padding: 30px 50px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.7);
  border-radius: ${radius.cardRadius};
`;

export const FormGroup = styled.div`
  margin: 0;
`;

export const Form = styled.form``;

export const FormSubmit = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 14%;
`;
