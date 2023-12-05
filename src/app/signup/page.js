// pages/signup.js
"use client";
import React, { useState } from "react";
import styles from "../css/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    displayName: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can add your logic here like sending data to an API, etc.
    console.log(formData); // For example, logging the form data
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="font-bold mb-4 text-center">Join Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Repeat similar code for other inputs */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="displayName" className="block text-gray-700 mb-2">
            Display Name
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>{" "}
        <div className="mt-6 flex justify-center">
          <button type="submit" className="signup-button text-white px-4 py-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
