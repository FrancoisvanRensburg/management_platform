import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTaskComments } from '../../../../../../Redux/actions/userActions';

import CommentForm from './Form';
import CommentItem from './Thread';

import { CommentInnerContainer, CommentThreadContainer } from './Styles';

const TaskCommentBox = () => {
  const dispatch = useDispatch();
  const task = useSelector((store) => store.project.task);
  useEffect(() => {
    dispatch(getTaskComments(task._id));
  }, [dispatch]);
  const comments = useSelector((store) => store.user.taskComments);
  return (
    <CommentInnerContainer>
      <CommentThreadContainer>
        {task !== null &&
          comments.length > 0 &&
          comments
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
