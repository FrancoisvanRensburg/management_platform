import React from 'react';

import CommentForm from './Form';
import CommentItem from './Thread';

import {
  CommentSection,
  CommentFormSection,
  CommentThreadContainer,
} from './Styles';

const TaskCommentBox = ({ task }) => {
  return (
    <CommentSection>
      <CommentFormSection style={{ width: '50%' }}>
        <CommentForm task={task} />
      </CommentFormSection>
      <CommentThreadContainer style={{ width: '50%' }}>
        {task === null ? (
          <div> </div>
        ) : (
          task.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))
        )}
      </CommentThreadContainer>
    </CommentSection>
  );
};

export default TaskCommentBox;
