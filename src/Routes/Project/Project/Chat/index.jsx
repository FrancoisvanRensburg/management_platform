import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProjectComments } from '../../../../Redux/actions/projectActions';

import CommentForm from './Form';
import CommentItem from './Thread';

import {
  CommentSection,
  CommentFormSection,
  CommentInnerContainer,
  CommentThreadContainer,
} from './Styles';

const ProjectChat = () => {
  const dispatch = useDispatch();
  const project = useSelector((store) => store.project.project);
  useEffect(() => {
    dispatch(getProjectComments(project._id));
  }, [dispatch]);
  const comments = useSelector((store) => store.project.projectComments);

  return (
    <CommentSection>
      <CommentInnerContainer>
        <CommentThreadContainer>
          {project === null ? (
            <div></div>
          ) : comments.length === 0 ? (
            <div>No conversation started</div>
          ) : (
            comments
              .slice()
              .reverse()
              .map((comment) => (
                <CommentItem key={comment._id} comment={comment} />
              ))
          )}
        </CommentThreadContainer>
        <CommentFormSection>
          <CommentForm project={project} />
        </CommentFormSection>
      </CommentInnerContainer>
    </CommentSection>
  );
};

export default ProjectChat;
