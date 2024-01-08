"use client";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ForumOverview() {
  const [loading, setLoading] = useState(true);
  const [forumPosts, setForumPosts] = useState(null);
  const [forumUsers, setForumUsers] = useState(null);

  useEffect(() => {
    fetch("/api/overview")
      .then((response) => response.json())
      .then((data) => {
        setForumPosts(data.totalPostNumber);
        setForumUsers(data.totalUserNumber);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <>
      <div className="md:basis-1/4 m-2 shadow-lg rounded-lg bg-white">
        <img src="/board.jpg" alt="banner" className="rounded-t-lg" />
        <div className="p-6">
          <h2 className="uppercase font-bold mb-2 text-fuchsia-800">
            Forum Overview
          </h2>
          {loading ? (
            <div className="grid grid-cols-2">
              <div>
                <p className="uppercase font-bold text-gray-400">
                  <Skeleton />
                </p>
                <p className="font-medium">
                  <Skeleton />
                </p>
              </div>
              <div>
                <p className="uppercase font-bold text-gray-400">
                  <Skeleton />
                </p>
                <p className="font-medium">
                  <Skeleton />
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2">
              <div>
                <p className="uppercase font-bold text-gray-400">Total Posts</p>
                <p className="font-medium">{forumPosts}</p>
              </div>
              <div>
                <p className="uppercase font-bold text-gray-400">Users</p>
                <p className="font-medium">{forumUsers}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
