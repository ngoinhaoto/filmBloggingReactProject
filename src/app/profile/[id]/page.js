"use client";
import React, { useState, useEffect } from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import Footer from "../../../components/footer/Footer";
import Skeleton from "react-loading-skeleton";
import UserInformation from "./UserInformation";

import Link from "next/link";
import UserPost from "./UserPost";
import { Avatar, Tabs, Tab } from "@nextui-org/react";

function formatDate(timestamp) {
  const currentDate = new Date();
  const commentDate = new Date(timestamp);
  const timeDifference = currentDate - commentDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  if (seconds > 0) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  return "Just now";
}

export default function UserPage({ params }) {
  const [loading, setLoading] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/user/${params.id}`);

        if (!response.ok) {
          // If the response is not okay, set userNotFound to true
          setUserNotFound(true);
          return;
        }

        const data = await response.json();
        console.log(data);

        setUserData(data.userOverview);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <>
      <div className="bg-white">
        <NavBarHomePage />
        <div className="mt-5">
          {loading && <Skeleton height={200} count={5} />}

          {!loading && userNotFound && (
            <div className="text-xl md:text-4xl text-center font-bold text-red-500">
              User not found!
            </div>
          )}

          {!loading && !userNotFound && (
            <div className="flex md:flex-row-reverse flex-col xl:px-36 mx-auto container">
              <div className="md:basis-1/4 m-3">
                <UserInformation user={userData} />
              </div>
              <div className="md:basis-3/4 m-3">
                <Tabs aria-label="Options" color="secondary">
                  <Tab key="post" title="Posts">
                    <ul>
                      {userData &&
                        userData.post &&
                        userData.post.map((post) => (
                          <li key={post.id}>
                            <UserPost post={post} />
                          </li>
                        ))}
                    </ul>
                  </Tab>
                  <Tab key="comment" title="Comments">
                    <ul>
                      {userData &&
                        userData.comment &&
                        userData.comment.map((comment) => (
                          <li key={comment.id}>
                            <Link href={`/post/${comment.postId}`}>
                              <div className="flex items-start space-x-4 py-4 border-b border-gray-200">
                                {" "}
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h3>
                                      in Post:{" "}
                                      <span className="italic">
                                        {comment.Post.title}
                                      </span>{" "}
                                      by author:{" "}
                                      <span className="font-bold">
                                        {comment.Post.author.username}
                                      </span>
                                    </h3>

                                    <p className="text-xs text-gray-500 mr-4 end">
                                      {formatDate(comment.createdAt)}
                                    </p>
                                  </div>
                                  <div className="flex items-center"></div>

                                  <p>{comment.commentBody}</p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </Tab>
                </Tabs>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
