"use client";
import React from "react";

import PostContent from "./PostContent";

import NavbarHomePage from "@/components/navbar/NavBarHomePage";
import Footer from "@/components/footer/Footer";
import CommentSection from "./CommentSection";

export default function Post({ params }) {
  const isLoggedIn = true;
  // query database to get task using id, task would have id

  return (
    <div className="bg-slate-100">
      <NavbarHomePage isLoggedIn={isLoggedIn} />
      <PostContent id={1} />

      <CommentSection postId={1} />
      <Footer />
    </div>
  );
}
