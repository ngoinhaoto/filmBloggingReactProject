"use client";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CommentSection = ({ comments, postID, callback}) => {
  const { data: session, status } = useSession();

  const userID = session?.user?.id;

  const router = useRouter();

  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load comments into state when the 'comments' prop changes
  useEffect(() => {
    setCommentList(comments || []);
    validateComment();
  }, [comments, newComment]);

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

    if (isFormValid) {
      setIsLoading(true);
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
        setNewComment("")
        callback();
        setIsLoading(false);
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
          isLoading={isLoading ? true : false}
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
