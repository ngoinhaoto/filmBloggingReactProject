"use client";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

const CommentSection = ({ comments, postID }) => {
  const { data: session, status } = useSession();

  const userID = session?.user?.id;

  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Load comments into state when the 'comments' prop changes
  useEffect(() => {
    setCommentList(comments || []);
  }, [comments]);

  const validateComment = () => {
    let errors = {};

    if (!newComment) {
      errors.comment = "Comment cannot be empty";
    } else if (newComment.length < 10) {
      errors.comment = "Comment must be at least 10 characters";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const postComment = async () => {
    validateComment();

    if (isFormValid) {
      const currentDate = new Date().toISOString();

      const commentData = {
        postID,
        date: currentDate,
        userID,
        commentContent: newComment,
      };

      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Fetch the updated comment list after successfully posting a comment
        const updatedCommentsResponse = await fetch(`/api/post/${postID}`);
        if (updatedCommentsResponse.ok) {
          const fetchedResult = await updatedCommentsResponse.json();

          const updatedComments = fetchedResult.postDetail.comments;

          setCommentList(updatedComments.comments || []);
        }

        setNewComment("");
      }
    }
  };

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
          isInvalid={!!errors.comment}
          errorMessage={errors.comment}
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
        {commentList.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
