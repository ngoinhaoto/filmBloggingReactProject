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
  console.log(post.createdAt)
  const dateTime = new Date(post.createdAt)
  const formattedDateTime = dateTime.toLocaleString();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="uppercase font-bold text-gray-400 text-sm mb-4">
            Posted by 
            <a href={`/profile/${post.userId}`} className="hover:underline text-gray-500"> {post.author.displayName} </a>
            on <span className="text-gray-500">{formattedDateTime}</span>
            </p>
          <div className="flex gap-1 flex-wrap mb-4 uppercase font-bold text-xs">
            {post.spoiledContent &&
            <Chip
            classNames={{
              base: "bg-gradient-to-br from-yellow-500 to-pink-400 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
            variant="shadow"
            radius="sm">
                Spoiled
            </Chip>}
            {post.nsfw && 
            <Chip
            classNames={{
              base: "bg-gradient-to-br from-red-500 to-pink-400 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
            variant="shadow"
            radius="sm">
              NSFW
            </Chip>}
            {post.categories.map((category, index) => (
              <Chip key={index} color="default" variant="solid" radius="sm">
                {category}
              </Chip>
            ))}
          </div>
        </div>
        {/* Author Name & Avatar */}
        
      </div>
      <div
        className="prose max-w-screen-lg prose-sm lg:prose-base prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: modifiedContent }}
      />
    </div>
  );
};

export default PostContent;
