import React, { useState, useEffect } from "react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

const Comment = ({ comment, onDelete, onEdit }) => {
  const { data: session } = useSession();
  const userID = session?.user?.id;

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.commentBody);

  useEffect(() => {
    setEditedComment(comment.commentBody);
  }, [comment]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedComment(comment.commentBody);
  };

  const handleSaveEdit = async () => {
    setIsEditing(false);
    onEdit(comment.id, editedComment);
  };
  // Function to format the date
  const formatDate = (date) => {
    const currentDate = new Date();
    const commentDate = new Date(date);
    const timeDifference = currentDate - commentDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (seconds > 0) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    return "Just now";
  };

  return (
    <div className="flex items-start space-x-4 py-4 border-b border-gray-200">
      <img
        src={comment.commentUser.avatar}
        alt="Avatar"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{comment.commentUser.displayName}</p>
            <p className="text-xs text-gray-500">
              @{comment.commentUser.username}
            </p>
          </div>
          <p className="text-xs text-gray-500">
            {formatDate(comment.createdAt)}
          </p>
        </div>
        {isEditing ? (
          <div>
            <Textarea
              type="text"
              color="secondary"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
            <div className="mt-2">
              <Button
                onClick={handleSaveEdit}
                color="success"
                className="text-white mx-2"
              >
                Save
              </Button>
              <Button onClick={handleCancelEdit} color="danger">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mt-1">{comment.commentBody}</p>
            {userID === comment.commentUser.id && (
              <div className="mt-2">
                <Button onClick={handleEdit} color="primary" className="mr-2">
                  Edit
                </Button>
                <Button onClick={() => onDelete(comment.id)} color="danger">
                  Delete
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
