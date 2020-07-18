import React, { Fragment } from 'react';
import Gif from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={Gif}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='loading...'
    />
  </Fragment>
);

export default Spinner;
