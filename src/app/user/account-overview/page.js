"use client";
import React, { useEffect, useState } from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import UserSideBar from "../../user/userSideBar/userSideBar";
import Footer from "../../../components/footer/Footer";
import { useSession } from "next-auth/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AccountOverview() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (status === "authenticated" && session?.user?.id) {
          const response = await fetch(`/api/user/${session.user.id}`);
          if (response.ok) {
            const fetchedUserData = await response.json();
            setUserData(fetchedUserData);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchUserData();
  }, [session, status]);

  return (
    <>
      <div className="bg-gray-100">
        <NavBarHomePage />
        <div className="container xl:px-36 px-3 mx-auto mt-5">
          <div className="flex md:flex-row flex-col">
            <UserSideBar />
            <div className="md:w-full m-3 text-center">
              <h1 className="text-2xl mb-6">Account Overview</h1>

              <div className="user-overview flex-col flex items-center align-middle justify-center">
                <div className="bg-gray-200 h-32 w-32 text-center rounded-full overflow-hidden">
                  {loading ? (
                    <Skeleton height={300} width={300} />
                  ) : (
                    <img
                      src={userData?.userOverview?.avatar}
                      width={300}
                      height={300}
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <p className="mt-2 mb-4 font-bold text-center">
                  {loading ? (
                    <Skeleton width={150} />
                  ) : (
                    userData?.userOverview?.displayName
                  )}
                </p>
                <div className="container flex mb-4 items-start justify-between">
                  <div className="w-1/2">
                    {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `User ID: ${userData?.userOverview?.id}`
                    )}
                  </div>
                  <div className="w-1/2">
                    {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `Location: ${userData?.userOverview?.location || "N/A"}`
                    )}
                  </div>
                </div>{" "}
                <div className="container flex items-start justify-between">
                  <div className="w-1/2">
                    {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `Post number: ${userData?.userOverview?.post.length}`
                    )}
                  </div>
                  <div className="w-1/2">
                    {loading ? (
                      <Skeleton width={150} />
                    ) : (
                      `Comment number: ${userData?.userOverview?.comment.length}`
                    )}
                  </div>
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
