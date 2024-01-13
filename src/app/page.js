"use client";
import NavbarHomePage from "../components/navbar/NavBarHomePage";
import ForumOverview from "../components/ForumOverview";

import ForumPosts from "../components/ForumPosts";
import Footer from "../components/footer/Footer";
import React, { useState } from "react";
export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="bg-slate-100">
      <NavbarHomePage onSearchChange={handleSearchChange} />
      <div className="flex flex-col-reverse md:flex-row container mx-auto mt-5">
        <div className="md:w-3/4 h-full">
          <ForumPosts searchValue={searchValue} />
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
