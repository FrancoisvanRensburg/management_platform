import styled from 'styled-components';

import { color, zIndexValues, radius, font } from '../../utils/Styles';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: ${zIndexValues.modalBackdrop};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 30%;
  width: ${(props) => props.width}%;
  overflow-y: scroll;
  background-color: ${color.backgroundDark};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: ${zIndexValues.modal};
  padding: 40px;
  border-radius: ${radius.containerRadius};
`;

export const CloseButton = styled.button`
  padding: '7px 7px';
  color: transparent;
  ${font.bold};
  background-color: ${color.buttonPink};
  border-radius: 2px;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;
