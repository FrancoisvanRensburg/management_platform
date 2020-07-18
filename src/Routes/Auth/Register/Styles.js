import styled from 'styled-components';

import { color, radius } from '../../../shared/utils/Styles';

export const AuthRegister = styled.div`
  width: 50%;
  margin: auto;
  background-color: ${color.backgroundDark};
  padding: 30px 50px;
  border-radius: ${radius.cardRadius};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.7);
  margin: 80px auto;
`;

export const AdminCridentials = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
`;

export const FormSubmit = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 14%;
`;
