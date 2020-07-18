import styled from 'styled-components';

import { color } from '../../../../shared/utils/Styles';

export const StyledBurger = styled.div`
  position: absolute;
  top: 110px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 45px;
  background-color: ${color.backgroundDark};
`;

export const BurgerElement = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 105;

  &:focus {
    outline: none;
  }

  div {
    width: 28px;
    height: 0.3rem;
    background: #4f4f4f;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.45),
      inset -1px -2px 2px rgba(0, 0, 0, 0.3),
      inset 0px 1px 2px rgba(255, 255, 255, 0.5);

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

// export const StyledBurger = styled.button`
//   position: absolute;
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ theme, open }) =>
//       open ? theme.primaryDark : theme.primaryLight};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => (open ? '0' : '1')};
//       transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }
// `;
