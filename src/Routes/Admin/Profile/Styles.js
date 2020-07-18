import styled from 'styled-components';

import { color, font } from '../../../shared/utils/Styles';

export const ProfileForm = styled.form`
  width: 50%;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
`;

export const ProfileContact = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
`;

export const FieldInput = styled.div`
  width: 75%;
`;

export const LabelItem = styled.label`
  color: ${color.textParagraph};
  ${font.size(15)}
  ${font.regular}
`;

export const FormSubmit = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`;
