import React from 'react';

import CommentForm from './Form';
import CommentItem from './Thread';

import { CommentInnerContainer, CommentThreadContainer } from './Styles';

const TaskCommentBox = ({ task }) => {
  return (
    <CommentInnerContainer>
      <CommentThreadContainer>
        {task !== null &&
          task.comments.length > 0 &&
          task.comments
            .slice()
            .reverse()
            .map((comment) => (
              <CommentItem key={comment._id} comment={comment} />
            ))}
      </CommentThreadContainer>
      <CommentForm task={task} />
    </CommentInnerContainer>
  );
};

export default TaskCommentBox;
