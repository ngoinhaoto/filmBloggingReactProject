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
  const truncatedContent = truncateContent(post.content, 10);
  const calculateDaysAgo = (timestamp) => {
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerHour = 60 * millisecondsPerMinute;
    const currentDate = new Date();
    const postDate = new Date(timestamp);

    const differenceInMilliseconds = currentDate - postDate;

    if (differenceInMilliseconds < millisecondsPerHour) {
      const minutesAgo = Math.floor(
        differenceInMilliseconds / millisecondsPerMinute
      );
      return `${
        minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`
      }`;
    } else if (differenceInMilliseconds < 24 * millisecondsPerHour) {
      const hoursAgo = Math.floor(
        differenceInMilliseconds / millisecondsPerHour
      );
      return `${hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`}`;
    } else {
      const daysAgo = Math.floor(
        differenceInMilliseconds / (24 * millisecondsPerHour)
      );
      return `${daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`}`;
    }
  };

  const daysAgo = calculateDaysAgo(post.createdAt); // Calculate days ago
  const getCategoryChipStyles = (category) => {
    switch (category.toLowerCase()) {
      case "fantasy":
        return {
          base: "bg-gradient-to-br from-red-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
          content: "drop-shadow shadow-black text-white",
        };
      case "horror":
        return {
          base: "bg-gradient-to-br from-green-500 to-yellow-500 border-small border-white/50 shadow-yellow-500/30",
          content: "drop-shadow shadow-black text-white",
        };
      case "action":
        return {
          base: "bg-gradient-to-br from-blue-500 to-indigo-500 border-small border-white/50 shadow-indigo-500/30",
          content: "drop-shadow shadow-black text-white",
        };
      case "romance":
        return {
          base: "bg-gradient-to-br from-purple-500 to-red-500 border-small border-white/50 shadow-red-500/30",
          content: "drop-shadow shadow-black text-white",
        };
      default:
        return {
          base: "bg-gradient-to-br from-gray-500 to-gray-700 border-small border-white/50 shadow-gray-700/30",
          content: "drop-shadow shadow-black text-white",
        };
    }
  };
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
            {post.categories.map((category) => (
              <Chip
                key={category}
                classNames={getCategoryChipStyles(category)}
                variant="solid"
                radius="sm"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
              </Chip>
            ))}{" "}
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
