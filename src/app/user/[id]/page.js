"use client";
import React, { useState, useEffect } from "react";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import Footer from "../../../components/footer/Footer";
import Skeleton from "react-loading-skeleton";

export default function UserPage({ params }) {
  const [userOverview, setUserOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/user/${params.id}`);
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
        <div className="container mx-auto p-4"></div>
        <Footer />
      </div>
    </>
  );
}
