"use client";

import React, { useState, useEffect } from "react";
import { Chip } from "@nextui-org/react";

import styles from "./PostContent.module.css"; // Import the CSS module

const PostContent = ({ post }) => {
  if (!post) {
    return (
      <>
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-2">
            <div>Loading...</div>
          </div>
        </div>
      </>
    );
  }

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
            <div className="text-sm font-bold">{post.author.displayName}</div>
          </div>
        </div>
      </div>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostContent;
