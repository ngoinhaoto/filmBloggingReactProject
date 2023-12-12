import React from "react";
import NavbarHomePage from "@/components/NavBarHomePage";
import ForumOverview from "@/components/ForumOverview";
import ForumPosts from "@/components/ForumPosts";

export default function Home() {
  const isLoggedIn = true; // todo authen

  return (
    <div className="bg-slate-100">
      <NavbarHomePage isLoggedIn={isLoggedIn} />
      <div className="flex flex-col-reverse md:flex-row container mx-auto mt-5">
        <ForumPosts />
        <ForumOverview />
      </div>
    </div>
  );
}
