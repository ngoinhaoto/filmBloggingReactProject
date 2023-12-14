import React from "react";

const Comment = ({ comment }) => {
  const { content, author, timestamp } = comment;

  return (
    <div className="comment">
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Posted at: {timestamp}</p>
    </div>
  );
};

export default Comment;
