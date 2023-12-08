// UserProfilePage.js

import React from "react";
import EditProfileForm from "@/components/EditProfileForm";
import NavBarHomePage from "@/components/NavBarHomePage";

const isLoggedIn = true;

const UserProfilePage = () => {
  return (
    <div className="bg-slate-100">
      <NavBarHomePage isLoggedIn={isLoggedIn} />

      <div className="flex bg-slate-100 h-screen">
        <div className="w-1/5 bg-gray-200">
          <nav className="mt-10">
            <ul>
              <li>
                <a href="#">Edit Information</a>
              </li>
              <li>
                <a href="#">Account Overview</a>
              </li>
              <li>
                <a href="#">Post Overview</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-10">
          <h1 className="text-2xl mb-6">Edit Your Profile</h1>
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
