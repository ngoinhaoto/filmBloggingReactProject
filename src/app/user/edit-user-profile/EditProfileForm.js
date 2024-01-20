"use client";
import React, { useState, useEffect } from "react";
import { useSession, getSession, signIn } from "next-auth/react";
import { Input, Button } from "@nextui-org/react";

const EditProfileForm = () => {
  const { data: session, status, update } = useSession();
  const [formData, setFormData] = useState({
    displayName: "",
    location: "",
  });

  useEffect(() => {
    if (session?.user) {
      setFormData({
        displayName: session.user.displayName || "",
        location: session.user.location || "",
      });
    }
  }, [session]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/user/${session?.user?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        update({
          displayName: formData.displayName,
          location: formData.location,
        });
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* <Input
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        placeholder="Username"
        variant="bordered"
        color="secondary"
        label="Username"
        className="mb-3"
      /> */}

      <Input
        type="text"
        value={formData.displayName}
        onChange={(e) =>
          setFormData({ ...formData, displayName: e.target.value })
        }
        placeholder="Display Name"
        variant="bordered"
        color="secondary"
        label="Display Name"
        className="mb-3"
      />

      <Input
        type="text"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        placeholder="Location"
        variant="bordered"
        color="secondary"
        label="Location"
        className="mb-3"
      />

      <Button
        type="submit"
        radius="sm"
        color="secondary"
        className="font-medium"
      >
        Save Changes
      </Button>
    </form>
  );
};

export default EditProfileForm;
