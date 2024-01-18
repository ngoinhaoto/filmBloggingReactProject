"use client";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { Textarea } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CommentSection = ({ comments, postID, callback }) => {
  const { data: session, status } = useSession();

  const userID = session?.user?.id;

  const router = useRouter();

  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load comments into state when the 'comments' prop changes

  const [sortByDate, setSortByDate] = useState("newest"); // Default sorting option
  const [sortDirection, setSortDirection] = useState("desc"); // Default sorting direction

  useEffect(() => {
    let sortedComments = comments ? [...comments] : [];

    // Sort comments based on the selected option and direction
    if (sortByDate === "newest") {
      sortedComments.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortByDate === "oldest") {
      sortedComments.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }

    // If sorting in ascending order, reverse the array
    if (sortDirection === "asc") {
      sortedComments.reverse();
    }

    setCommentList(sortedComments);
    validateComment();
  }, [comments, newComment, sortByDate, sortDirection]);

  const handleSortChange = (selectedOption) => {
    // Toggle sort direction if the same option is selected again
    setSortDirection((prevDirection) =>
      sortByDate === selectedOption
        ? prevDirection === "desc"
          ? "asc"
          : "desc"
        : "desc"
    );

    setSortByDate(selectedOption);
  };
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
        setNewComment("");
        callback();
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Comments</h2>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="faded"
            radius="sm"
            color="secondary"
            className="capitalize ms-2"
          >
            Sort by: {sortByDate === "newest" ? "Newest" : "Oldest"} (
            {sortDirection === "asc" ? "Asc" : "Desc"})
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => handleSortChange("newest")}>
            Newest
          </DropdownItem>
          <DropdownItem onClick={() => handleSortChange("oldest")}>
            Oldest
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {session && (
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-center mt-4 mb-4">
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
      )}
      <div className="comments-list">
        {commentList.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
