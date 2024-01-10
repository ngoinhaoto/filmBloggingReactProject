import React from "react";

const Comment = ({ comment }) => {
  const commentUserDisplayName = comment.commentUser.displayName;
  const commentUsername = comment.commentUser.username;
  const commentUserAvatar = comment.commentUser.avatar;
  const commentContent = comment.commentBody;
  const commentDate = comment.createdAt;

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
        src={commentUserAvatar}
        alt="Avatar"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{commentUserDisplayName}</p>
            <p className="text-xs text-gray-500">@{commentUsername}</p>
          </div>
          <p className="text-xs text-gray-500">{formatDate(commentDate)}</p>
        </div>
        <p className="mt-1">{commentContent}</p>
      </div>
    </div>
  );
};

export default Comment;
