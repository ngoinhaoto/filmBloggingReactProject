"use client";

import React, { useState, useEffect } from "react";
import { Chip } from "@nextui-org/react";

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

  // Function to add inline styles to img tags
  const addInlineStyles = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const images = doc.querySelectorAll("img");

    images.forEach((img) => {
      img.style.maxWidth = "100%";
      img.style.height = "auto";
    });

    return doc.documentElement.innerHTML;
  };

  const modifiedContent = addInlineStyles(post.content);

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
        className="prose-sm prose-slate lg:prose-xl prose-img:rounded-xl md:prose-img"
        dangerouslySetInnerHTML={{ __html: modifiedContent }}
      />
    </div>
  );
};

export default PostContent;
