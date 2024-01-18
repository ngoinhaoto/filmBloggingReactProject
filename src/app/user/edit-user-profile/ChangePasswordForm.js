"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashIcon";
export default function ChangePasswordForm() {
  const { data: session, status, update } = useSession();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // Added isSuccess state

  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);

  const toggleCurrentVisibility = () =>
    setCurrentPasswordVisible(!isCurrentPasswordVisible);
  const toggleNewVisibility = () =>
    setNewPasswordVisible(!isNewPasswordVisible);

  const handlePasswordChange = async () => {
    try {
      const userId = session?.user?.id;

      const response = await fetch(`/api/user/password/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (response.ok) {
        setMessage("Password changed successfully");
        setIsSuccess(true);
      } else {
        const errorMessage = await response.json();
        setIsSuccess(false);
        setMessage(`Failed to change password: ${errorMessage.message}`);
      }
    } catch (e) {
      setMessage("An error occurred while changing the password");
      setIsSuccess(false);
      console.error("Error changing password:", e);
    }
  };

  const handleCloseModal = () => {
    // Reset state values on modal close
    setCurrentPassword("");
    setNewPassword("");
    setMessage("");
    setIsSuccess(false);

    onClose();
  };

  return (
    <div className="mt-4">
      <Button onPress={onOpen} color="warning">
        Change Password
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={handleCloseModal}
      >
        {" "}
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Change Password</ModalHeader>
              <ModalBody>
                <form>
                  <div className="mb-4">
                    <label htmlFor="currentPassword">Current Password</label>
                    <Input
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleCurrentVisibility}
                        >
                          {isCurrentPasswordVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isCurrentPasswordVisible ? "text" : "password"}
                      id="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="newPassword">New Password</label>
                    <Input
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleNewVisibility}
                        >
                          {isNewPasswordVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isNewPasswordVisible ? "text" : "password"}
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </form>
                <div className={isSuccess ? "text-green-500" : "text-red-500"}>
                  {message}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={handlePasswordChange} color="primary">
                  Change Password
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
