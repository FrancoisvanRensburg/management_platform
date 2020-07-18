import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div>
      <div>
        <h3>{comment.name}</h3>
        <p>{comment.date}</p>
      </div>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentItem;
