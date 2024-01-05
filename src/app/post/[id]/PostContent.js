"use client";

import React, { useState, useEffect } from "react";
import { Chip } from "@nextui-org/react";

const PostContent = ({ id }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/post/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setPost(data.postDetail);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

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
            <div className="text-xl font-bold">{post.author.name}</div>
          </div>
        </div>
      </div>
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default PostContent;
