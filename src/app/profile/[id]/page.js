"use client";
import React, { useState, useEffect } from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import Footer from "../../../components/footer/Footer";
import Skeleton from "react-loading-skeleton";

import Link from "next/link";
import UserPost from "./UserPost";
import { Avatar } from "@nextui-org/react";

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
        <div className="container mx-auto p-4 flex justify-center items-center">
          {loading && <Skeleton height={200} count={5} />}

          {!loading && userNotFound && (
            <div className="text-xl md:text-4xl text-center font-bold text-red-500">
              User not found!
            </div>
          )}

          {!loading && !userNotFound && (
            <div className="flex-col">
              <div className="flex-col text-center items-center">
                <div className="w-36 h-36 mx-auto mb-4">
                  <Avatar
                    isBordered
                    src={userData && userData.avatar}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>Display Name: {userData.displayName}</div>
                <div>Location: {userData.location}</div>
                <div>Created: {formatDate(userData.createdAt)}</div>{" "}
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">User Posts:</h2>
                <ul>
                  {userData &&
                    userData.post &&
                    userData.post.map((post) => (
                      <li key={post.id}>
                        <UserPost post={post} />
                      </li>
                    ))}
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">User Comments:</h2>
                <ul>
                  {userData &&
                    userData.comment &&
                    userData.comment.map((comment) => (
                      <li key={comment.id}>
                        <Link href={`/post/${comment.postId}`}>
                          {comment.commentBody}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
