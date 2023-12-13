"use client";

import React from "react";
import { Chip } from "@nextui-org/react";

const PostContent = ({ id }) => {
  // Placeholder data for the post
  const post = {
    id: "1",
    title: "Sample Post Title",
    categories: ["NSFW", "Horror", "Spoiler"],
    author: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/60", // Placeholder avatar image URL
    },
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-1 flex-wrap mb-4">
            {post.categories.map((category, index) => (
              <Chip key={index} color="secondary" variant="solid" radius="sm">
                {category}
              </Chip>
            ))}
          </div>
        </div>

        {/* Author Name & Avatar */}
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <img
              src={post.author.avatar}
              alt="Author Avatar"
              className="rounded-full h-10 w-10 object-cover inline-block"
            />
            <div className="text-xl font-bold">{post.author.name}</div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="text-lg">{post.content}</div>
    </div>
  );
};

export default PostContent;
