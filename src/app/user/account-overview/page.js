"use client";
import React from "react";
import NavBarHomePage from "@/components/navbar/NavBarHomePage";
import UserSideBar from "@/app/user/userSideBar/userSideBar";
const isLoggedIn = true;
import Footer from "@/components/footer/Footer";

import { Icon } from "@iconify/react";

export default function AccountOverview() {
  return (
    <>
      <div className="bg-white">
        <NavBarHomePage isLoggedIn={isLoggedIn} />

        <div className="container mx-auto p-4 md:p-0">
          <div className="md:flex">
            <UserSideBar />
            <div className="w-full md:w-4/5 p-10 text-center">
              <h1 className="text-2xl mb-6">Account Overview</h1>

              <div className="user-overview flex-col flex items-center align-middle justify-center">
                <div className="bg-gray-200 h-32 w-32 text-center rounded-full overflow-hidden">
                  <img
                    src="avatar.jpg"
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 mb-4 font-bold text-center">
                  User Display Name
                </p>
                <div className="container flex mb-4 items-start justify-between">
                  <div className="w-1/2">User ID: 32891312</div>
                  <div className="w-1/2">Location: Latvia</div>
                </div>{" "}
                <div className="container flex items-start justify-between">
                  <div className="w-1/2">Post number: 69</div>
                  <div className="w-1/2">Comment number: 420</div>
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
