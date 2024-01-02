"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";

const EditProfileForm = () => {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [location, setLocation] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // handle form submission later here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        variant="bordered"
        color="secondary"
        label="Username"
        className="mb-3"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        variant="bordered"
        color="secondary"
        label="Password"
        className="mb-3"
      />
      <Input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
        variant="bordered"
        color="secondary"
        label="Display Name"
        className="mb-3"
      />
      <Input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
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
