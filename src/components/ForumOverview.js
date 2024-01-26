"use client";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from "@iconify/react";
import { Divider, User, Button, Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function ForumOverview() {
  const [loading, setLoading] = useState(true);
  const [forumPosts, setForumPosts] = useState(null);
  const [forumUsers, setForumUsers] = useState(null);
  const { data: session, status } = useSession();

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
  }, [session, status]);

  return (
    <>
      <div className="md:basis-1/4 md:m-3 m-6 shadow-lg rounded-xl bg-white">
        <img src="/board.jpg" alt="banner" className="rounded-t-xl" />
        <div className="p-6">
          <h2 className="uppercase font-bold text-fuchsia-800">
            What is this?
          </h2>
          <p className="mb-3">A forum to share your thoughts, discover hidden gems, and connect with fellow movie enthusiasts. Let the reel conversations begin! </p>
          <Divider className="my-4" />
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
            <div className="flex flex-col">
              <div className="flex flex-row items-end justify-between">
                <p className="uppercase font-bold text-gray-400 flex items-end"><Icon icon="ic:baseline-post-add" width={28} className="mr-1"/>Posts</p>
                <p className="font-medium">{forumPosts}</p>
              </div>
              <div className="flex flex-row items-end justify-between">
                <p className="uppercase font-bold text-gray-400 flex items-end"><Icon icon="mdi:user-outline" width={28} className="mr-1"/>Users</p>
                <p className="font-medium">{forumUsers}</p>
              </div>
            </div>
          )}
        <Divider className="my-4" />
        {session && session.user ? (
          <>
          <User
            as={Link}
            href={`/profile/${session.user.id}`}
            name={session.user.displayName}
            description={`${session.user.post} post(s) on this forum`}
            avatarProps={{
              src: `${session.user.avatar}`
            }}
          />
          <Button
                  color="default"
                  variant="flat"
                  className="font-bold flex flex-row items-center justify-center mt-2 "
                  href="/user/create-post"
                  as={Link}
                  radius="sm"
                >
                  <Icon
                    icon="basil:add-solid"
                    color="secondary"
                    width="30"
                    height="30"
                  />
                  Create Post
          </Button>
          </>
        ) : (
        <>
        <p className="text-gray-400">Sign in to start creating posts</p>
        <Button
                  color="default"
                  variant="flat"
                  className="font-bold flex flex-row items-center justify-center mt-2 "
                  href="/signin"
                  as={Link}
                  radius="sm"
                >
                  Sign In
          </Button>
          </>)}
        </div>
      </div>
    </>
  );
}
