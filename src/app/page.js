import React from "react";
import NavbarHomePage from "../components/navbar/NavBarHomePage";
import ForumOverview from "../components/ForumOverview";

import ForumPosts from "../components/ForumPosts";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <NavbarHomePage />
      <div className="flex flex-col-reverse md:flex-row container mx-auto mt-5">
        <div className="md:w-3/4 h-full">
          <ForumPosts />
        </div>
        <div className="md:w-1/4 h-full md:ml-2">
          {" "}
          <ForumOverview />
        </div>{" "}
      </div>
      <Footer></Footer>
    </div>
  );
}
