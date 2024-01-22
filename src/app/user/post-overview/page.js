"use client";
import React, { useState, useEffect } from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import UserSideBar from "../../user/userSideBar/userSideBar";
const isLoggedIn = true;
import Footer from "../../../components/footer/Footer";
import PostList from "./PostList"
import { Icon } from "@iconify/react";
import { useSession, getSession } from "next-auth/react";

export default function PostOverview() {

  const { data: session, status } = useSession();
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

  const countPublishedAndDraftPosts = () => {
    const publishedCount = posts.filter((post) => post.published).length;
    const draftCount = posts.length - publishedCount;

    return { publishedCount, draftCount };
  };

  const { publishedCount, draftCount } = countPublishedAndDraftPosts();

  return (
    <>
      <div className="bg-gray-100">
        <NavBarHomePage isLoggedIn={isLoggedIn} />

        <div className="container mx-auto p-4 md:p-0">
          <div className="md:flex">
            <UserSideBar />
            <div className="w-full md:w-4/5 p-10 text-center">
              <h1 className="text-2xl mb-6">Post Overview</h1>

              <div className="user-overview flex-col flex items-center align-middle justify-center">
                <div className="flex md:flex-row w-full gap-7 justify-center flex-col">
                  <div className="rounded-xl bg-white flex flex-col shadow-md md:w-1/5 items-start w-full">
                    <div className="flex flex-row px-6 py-4 items-center">
                      <div className="m-0">
                        <Icon
                          icon="ic:baseline-post-add"
                          color="#6b21a8"
                          width="50"
                          height="50"
                        />
                      </div>
                      <div className="flex-col text-start ms-4">
                        <div className="text-slate-400">My Posts</div>
                        <div className="font-bold text-3xl">{posts.length}</div>
                      </div>
                    </div>
                    <button className="w-full text-center py-2 bg-slate-100 rounded-b-xl hover:bg-slate-400 hover:text-white">
                      View
                    </button>
                  </div>
                  <div className="rounded-xl bg-white flex flex-col shadow-md md:w-1/5 items-start w-full">
                    <div className="flex flex-row px-6 py-4 items-center">
                      <div className="m-0">
                        <Icon
                          icon="material-symbols:public"
                          color="#6b21a8"
                          width="50"
                          height="50"
                        />
                      </div>
                      <div className="flex-col text-start ms-4">
                        <div className="text-slate-400">Published</div>
                        <div className="font-bold text-3xl">{publishedCount}</div>
                      </div>
                    </div>
                    <button className="w-full text-center py-2 bg-slate-100 rounded-b-xl hover:bg-slate-400 hover:text-white">
                      View
                    </button>
                  </div>
                  <div className="rounded-xl bg-white flex flex-col shadow-md md:w-1/5 items-start w-full">
                    <div className="flex flex-row px-6 py-4 items-center">
                      <div className="m-0">
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#6b21a8"
                          width="50"
                          height="50"
                        />
                      </div>
                      <div className="flex-col text-start ms-4">
                        <div className="text-slate-400">Draft</div>
                        <div className="font-bold text-3xl">{draftCount}</div>
                      </div>
                    </div>
                    <button className="w-full text-center py-2 bg-slate-100 rounded-b-xl hover:bg-slate-400 hover:text-white">
                      View
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-full mt-8">
                  <PostList fetchUserData={fetchUserData} posts={posts}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}