import React from 'react';
import PropTypes from 'prop-types';

import { Submit, Comment, DetailOutline } from './Styles';

export const SubmitButton = ({ text }) => {
  return <Submit>{text}</Submit>;
};

SubmitButton.propTypes = {
  text: PropTypes.string,
};

export const CommentButton = () => {
  return <Comment>comment</Comment>;
};

export const DetailButton = () => {
  return (
    <DetailOutline>
      <div />
      <div />
      <div />
    </DetailOutline>
  );
};
