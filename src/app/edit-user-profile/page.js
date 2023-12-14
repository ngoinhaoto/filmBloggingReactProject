// UserProfilePage.js

import React from "react";
import EditProfileForm from "@/app/edit-user-profile/EditProfileForm";
import NavBarHomePage from "@/components/navbar/NavBarHomePage";

const isLoggedIn = true;

const UserProfilePage = () => {
  return (
    <div className="bg-white">
      <NavBarHomePage isLoggedIn={isLoggedIn} />

      <div className="flex container mx-auto h-screen">
        <div className="w-1/5">
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