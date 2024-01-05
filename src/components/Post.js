"use client";
import React from "react";
import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import userFilled from "@iconify/icons-tabler/user-filled";
import timeLine from "@iconify/icons-mingcute/time-line";
import Link from "next/link";

const truncateContent = (content, wordCount) => {
  const words = content.split(" ");
  if (words.length > wordCount) {
    return words.slice(0, wordCount).join(" ") + " ...";
  }
  return content;
};

export default function Post({ post }) {
  const truncatedContent = truncateContent(post.content, 10); // Limit content to 20 words
  const calculateDaysAgo = (timestamp) => {
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const currentDate = new Date(); // Current date
    const postDate = new Date(timestamp); // Post creation date

    const differenceInMilliseconds = currentDate - postDate; // Calculate the difference in milliseconds
    const daysAgo = Math.floor(differenceInMilliseconds / millisecondsPerDay); // Convert milliseconds to days

    return `${daysAgo} days ago`;
  };

  const daysAgo = calculateDaysAgo(post.createdAt); // Calculate days ago

  return (
    <>
      <Link
        href={`/post/${post.id}`}
        className="bg-white flex shadow-lg rounded-xl flex-col md:flex-row my-2"
      >
        <div className="md:basis-1/4 md:h-auto relative">
          <div
            className="md:w-full h-60 md:h-full md:rounded-l-xl md:rounded-r-none rounded-t-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${post.thumbnail})` }}
          ></div>
        </div>
        <div className="md:basis-3/4 flex-col p-6 w-full">
          <div className="mb-6">
            <div className="text-xl font-medium">{post.title}</div>
            <div
              className="text-gray-400"
              dangerouslySetInnerHTML={{ __html: truncatedContent }}
            ></div>
          </div>
          <div className="flex gap-1 flex-wrap mb-3">
            {post.spoiledContent && (
              <Chip color="secondary" variant="solid" radius="sm">
                Spoiled
              </Chip>
            )}
            {post.nsfw && (
              <Chip color="danger" variant="solid" radius="sm">
                NSFW
              </Chip>
            )}
            <Chip color="secondary" variant="solid" radius="sm">
              Fantasy
            </Chip>
            <Chip color="default" variant="solid" radius="sm">
              Horror
            </Chip>
            <Chip color="default" variant="solid" radius="sm">
              Sci-Fi
            </Chip>
            <Chip color="default" variant="solid" radius="sm">
              Action
            </Chip>
          </div>

          <div className="w-full flex">
            <div className="me-4 flex items-center">
              <Icon icon={userFilled} color="#4b5563" className="me-1" />
              <p className="text-gray-600">{post.author.displayName}</p>
            </div>
            <div className="flex items-center">
              <Icon icon={timeLine} color="#4b5563" />
              <p className="text-gray-600">{daysAgo}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
