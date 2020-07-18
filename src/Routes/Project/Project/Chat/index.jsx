import React from 'react';
import { useSelector } from 'react-redux';

import CommentForm from './Form';
import CommentItem from './Thread';

import {
  CommentSection,
  CommentFormSection,
  CommentInnerContainer,
  CommentThreadContainer,
} from './Styles';

const ProjectChat = () => {
  const project = useSelector((store) => store.project.project);
  return (
    <CommentSection>
      <CommentInnerContainer>
        <CommentThreadContainer>
          {project === null ? (
            <div></div>
          ) : project.comments.length === 0 ? (
            <div>No conversation started</div>
          ) : (
            project.comments
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
