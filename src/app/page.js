import React from "react";
import NavbarHomePage from "@/components/NavBarHomePage"; // Update the path based on your project structure
import ForumOverview from "@/components/ForumOverview";
import ForumPosts from "@/components/ForumPosts";

export default function Home() {
  const isLoggedIn = true; // You can set this based on your authentication state

  return (
    <div className="bg-slate-100">
      <NavbarHomePage isLoggedIn={isLoggedIn} />
      <div className="flex flex-col-reverse md:flex-row container mx-auto mt-5">
        <ForumOverview/>
        <ForumPosts/>
      </div>
    </div>
  );
}
