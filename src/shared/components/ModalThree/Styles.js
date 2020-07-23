import styled from 'styled-components';

import { color, zIndexValues, radius, font } from '../../utils/Styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 105;
`;

export const Inner = styled.div`
  position: absolute;
  top: 100px;
  width: 80%;
  max-width: calc(100%-120px);
  margin-left: auto;
  margin-right: auto;
  /* margin: 0 auto; */
  /* background: padding-box rgb(255, 255, 255); */
  background-color: ${color.backgroundDark};
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-image: initial;
  border-radius: 0.3rem;
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  /* color: red; */
  background-color: ${color.textTitle};
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Header = styled.div`
  padding: 20px;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0px;
  border-bottom: 1px solid rgb(222, 226, 230);
`;

export const Body = styled.div`
  padding: 20px;
  overflow: hidden;
  /* height: 500px; */
  height: 70vh;
`;
