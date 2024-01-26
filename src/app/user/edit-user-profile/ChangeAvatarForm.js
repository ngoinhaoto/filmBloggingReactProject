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

import { UploadButton } from "../../../utils/uploadthing";

export default function ChangeAvatarForm() {
  const { data: session, status, update } = useSession();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [avatar, setAvatar] = useState(null);

  const handleSaveChange = async () => {
    try {
      const userId = session?.user?.id;

      const response = await fetch(`/api/user/avatar/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar: avatar }),
      });

      if (response.ok) {
        alert("Avatar changed successfully");

        update({
          avatar: avatar,
        });
        onClose();
        setAvatar(null);
      } else {
        const errorMessage = await response.json();
        alert(`Failed to change avatar: ${errorMessage.message}`);
      }
    } catch (error) {
      alert("Error occured when changing avatar");
    }
  };

  return (
    <div className="mt-4">
      <div className="flex flex-row justify-between items-center">
        <div>Avatar</div>
        <Button
        onPress={onOpen}
        className="bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg"
        radius="sm"
      >
        Change Avatar
      </Button>

      </div>
      
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">Change Avatar</ModalHeader>
              <ModalBody>
                <label htmlFor="avatar" className="block text-gray-700 mb-2">
                  Upload Avatar Here
                </label>
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setAvatar(res[0].url);

                    alert("Upload Completed");
                  }}
                  onUploadError={(error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                  appearance={{
                    button:
                      "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400",
                    container:
                      "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
                    allowedContent:
                      "flex h-8 flex-col items-center justify-center px-2 text-white",
                  }}
                />
                {avatar && (
                  <img
                    src={avatar}
                    alt="avatar preview"
                    className="w-32 h-32 object-cover rounded-md border border-gray-300"
                  ></img>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={handleSaveChange}>
                  Save Change
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
