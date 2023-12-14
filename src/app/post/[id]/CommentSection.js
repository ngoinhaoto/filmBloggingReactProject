import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Textarea } from "@nextui-org/react";

import { Button } from "@nextui-org/react";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const loadComments = async () => {
    // Fetch comments from your backend based on postId
    // Update the comments state with fetched comments
    // const comments = await fetchComments(postId);
    // setComments(comments);
  };

  const postComment = async () => {
    // Send the new comment to your backend for the given postId
    // Example:
    // await postNewComment(newComment, postId);
    // Reload comments after posting a new comment
    // loadComments();
  };

  useEffect(() => {
    loadComments(); // Load comments on initial render based on postId
  }, [postId]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Comments</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-center mb-4">
        <Textarea
          type="text"
          color="secondary"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          label="Comment"
          placeholder="Sending thoughts and prayers"
          className="w-full md:w-8/12"
        />
        <Button
          onClick={postComment}
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg md:ml-2 w-full md:w-auto"
        >
          Post
        </Button>
      </div>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
