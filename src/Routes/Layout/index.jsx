import React, { Fragment, useState, useRef } from 'react';
import useOnClickOutside from '../../shared/hooks/onOutsideClick';

import NavbarTop from './NavbarTop';
import NavbarLeft from './NavbarLeft';
import Burger from './NavbarLeft/Burger';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <Fragment>
      <NavbarTop />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <NavbarLeft open={open} setOpen={setOpen} />
      </div>
    </Fragment>
  );
};

export default Layout;
