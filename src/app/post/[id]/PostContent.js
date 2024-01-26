"use client";

import React, { useState, useEffect } from "react";
import { Chip, Divider } from "@nextui-org/react";

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

    const videos = doc.querySelectorAll("video");

    videos.forEach((video) => {
      video.style.maxWidth = "100%";
      video.style.height = "auto";
    });

    const iframes = doc.querySelectorAll("iframe");

    iframes.forEach((iframe) => {
      iframe.style.maxWidth = "100%";
      iframe.style.height = "auto";
    });

    images.forEach((img) => {
      img.style.maxWidth = "100%";
      img.style.height = "auto";
    });

    return doc.documentElement.innerHTML;
  };

  const modifiedContent = addInlineStyles(post.content);
  console.log(post.createdAt);
  const dateTime = new Date(post.createdAt);
  const formattedDateTime = dateTime.toLocaleString();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="uppercase font-bold text-gray-400 text-sm mb-2">
            Posted by
            <a
              href={`/profile/${post.userId}`}
              className="hover:underline text-gray-500"
            >
              {" "}
              {post.author.displayName}{" "}
            </a>
            on <span className="text-gray-500">{formattedDateTime}</span>
          </p>
          <div className="flex flex-row gap-1 flex-wrap mb-4 uppercase font-bold items-center">
            <p className="text-gray-400 text-sm">TAGS BY</p>
            {post.spoiledContent && (
              <Chip
                classNames={{
                  base: "bg-gradient-to-br from-yellow-500 to-pink-400 border-small border-white/50 shadow-pink-500/30 mb-1",
                  content: "drop-shadow shadow-black text-white",
                }}
                variant="shadow"
                radius="sm"
              >
                <p className="font-bold text-xs">Spoiled</p>
              </Chip>
            )}
            {post.nsfw && (
              <Chip
                classNames={{
                  base: "bg-gradient-to-br from-red-500 to-pink-400 border-small border-white/50 shadow-pink-500/30 mb-1",
                  content: "drop-shadow shadow-black text-white",
                }}
                variant="shadow"
                radius="sm"
              >
                <p className="font-bold text-xs">NSFW</p>
              </Chip>
            )}
            {post.categories.map((category, index) => (
              <Chip
                key={index}
                color="primary"
                variant="solid"
                radius="sm"
                className="mb-1"
              >
                <p className="font-bold text-xs">{category}</p>
              </Chip>
            ))}
          </div>
          <Divider />
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
