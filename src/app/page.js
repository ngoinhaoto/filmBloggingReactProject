import React from "react";
import NavbarHomePage from "@/components/navbar/NavBarHomePage";
import ForumOverview from "@/components/ForumOverview";
import ForumPosts from "@/components/ForumPosts";
import Footer from "@/components/footer/Footer";
export default function Home() {
  const isLoggedIn = true; // todo authen

  return (
    <div className="bg-slate-100">
      <NavbarHomePage />
      <div className="flex flex-col-reverse md:flex-row container mx-auto mt-5">
        <ForumPosts />
        <ForumOverview />
      </div>
      <Footer></Footer>
    </div>
  );
}
