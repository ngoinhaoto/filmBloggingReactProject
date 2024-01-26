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
  Divider
} from "@nextui-org/react";

import ChangePasswordForm from "./ChangePasswordForm";
import ChangeAvatarForm from "./ChangeAvatarForm";
const UserProfilePage = () => {
  return (
    <div className="bg-gray-100">
      <NavBarHomePage />

      <div className="container xl:px-36 mx-auto mt-5">
        <div className="md:flex">
          <UserSideBar />
          <div className="w-full md:w-4/5 m-3 text-start">
            <h1 className="text-2xl mb-6">Edit Your Profile</h1>
            <p className="uppercase text-sm font-bold text-gray-400 mb-1">Basic Information</p>
            <Divider className="mb-4"/>
            <EditProfileForm />
            <p className="uppercase text-sm font-bold text-gray-400 mb-1 mt-6">Security</p>
            <Divider className="mb-4"/>
            <ChangePasswordForm />
            <p className="uppercase text-sm font-bold text-gray-400 mb-1 mt-6">Avatar</p>
            <Divider className="mb-4"/>
            <ChangeAvatarForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
