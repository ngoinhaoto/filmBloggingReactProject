"use client";
import React, { useState, useEffect } from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import Footer from "../../../components/footer/Footer";
import Skeleton from "react-loading-skeleton";

export default function UserPage({ params }) {
  const [userOverview, setUserOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userNotFound, setUserNotFound] = useState(false);

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
        setUserOverview(data.userOverview);
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
        <div className="container mx-auto p-4">
          {loading && <Skeleton height={200} count={5} />}

          {!loading && userNotFound && (
            <div className="text-xl md:text-4xl text-center font-bold text-red-500">
              User not found!
            </div>
          )}

          {!loading && !userNotFound && (
            // Render user profile details here
            <div></div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
