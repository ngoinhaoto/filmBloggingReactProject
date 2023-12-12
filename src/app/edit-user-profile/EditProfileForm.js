"use client";

// EditProfileForm.js

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
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
      />
      <Input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />
      <Button type="submit">Save Changes</Button>
    </form>
  );
};

export default EditProfileForm;
