"use client";
import React, { useState, useEffect } from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import UserSideBar from "../../user/userSideBar/userSideBar";
const isLoggedIn = true;
import Footer from "../../../components/footer/Footer";
import PostList from "./PostList"
import { Icon } from "@iconify/react";
import { useSession, getSession } from "next-auth/react";
import { Divider } from "@nextui-org/react";

export default function PostOverview() {

  const { data: session, status, update } = useSession();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchUserData();
  }, [session, status]);

  const fetchUserData = async () => {
    try {
      if (status === "authenticated" && session?.user?.id) {
        const response = await fetch(`/api/user/${session.user.id}`);
        if (response.ok) {
          const fetchedUserData = await response.json();
          setPosts(fetchedUserData.userOverview.post);
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-100">
        <NavBarHomePage isLoggedIn={isLoggedIn} />

        <div className="container xl:px-36 px-3 mx-auto mt-5">
          <div className="flex md:flex-row flex-col">
            <UserSideBar />
            <div className="text-start m-3 md:w-full">
              <h1 className="text-2xl">Post Overview</h1>

                
                <div className="flex flex-col mt-4">
                  <div className="flex flex-row mb-1">
                    <div className="basis-3/5 font-bold uppercase text-gray-400 text-sm">Title</div>
                    <div className="basis-2/5 font-bold uppercase text-gray-400 text-sm">Created at</div>
                  </div>
                  <Divider className="mb-4"/>
                  <PostList fetchUserData={fetchUserData} posts={posts} session={session} update={update}/>
                </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}