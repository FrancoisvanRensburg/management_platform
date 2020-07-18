import React from 'react';
import Moment from 'react-moment';

import {
  CommentItemStyles,
  CommentItemHeader,
  CommenterName,
  CommentDate,
} from '../Styles';

const CommentItem = ({ comment }) => {
  return (
    <CommentItemStyles>
      <CommentItemHeader>
        <CommenterName>{comment.name}</CommenterName>
        <CommentDate>
          <em>
            <Moment format='Do MMM HH:MM'>{comment.date}</Moment>
          </em>
        </CommentDate>
      </CommentItemHeader>
      <div>
        <p>{comment.text}</p>
      </div>
    </CommentItemStyles>
  );
};

export default CommentItem;
