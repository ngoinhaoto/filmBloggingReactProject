import React from "react";
import NavBarHomePage from "@/components/navbar/NavBarHomePage";
import UserSideBar from "@/components/userSideBar/userSideBar";
const isLoggedIn = true;
import Footer from "@/components/footer/Footer";

export default function AccountOverview() {
  return (
    <>
      <div className="bg-white">
        <NavBarHomePage isLoggedIn={isLoggedIn} />

        <div className="container mx-auto p-4 md:p-0">
          <div className="md:flex">
            <UserSideBar />
            <div className="w-full md:w-4/5 p-10">
              <h1 className="text-2xl mb-6">Account Overview</h1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
