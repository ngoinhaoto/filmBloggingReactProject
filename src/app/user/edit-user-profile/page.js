import React from "react";
import EditProfileForm from "../../user/edit-user-profile/EditProfileForm";
import NavBarHomePage from "../../../components/navbar/NavBarHomePage";
import UserSideBar from "../../user/userSideBar/userSideBar";
import Footer from "../../../components/footer/Footer";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import ChangePasswordForm from "./ChangePasswordForm";

const UserProfilePage = () => {
  return (
    <div className="bg-white">
      <NavBarHomePage />

      <div className="container mx-auto p-4 md:p-0">
        <div className="md:flex">
          <UserSideBar />
          <div className="w-full md:w-4/5 p-10 text-center">
            <h1 className="text-2xl mb-6">Edit Your Profile</h1>
            <EditProfileForm />

            <ChangePasswordForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
