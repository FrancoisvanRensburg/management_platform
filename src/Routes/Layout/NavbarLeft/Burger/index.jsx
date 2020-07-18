import React from 'react';
import PropTypes from 'prop-types';

import { BurgerElement, StyledBurger } from './Styles';

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger>
      <BurgerElement open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerElement>
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Burger;
