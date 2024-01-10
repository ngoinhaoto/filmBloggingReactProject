// pages/signup.js
"use client";
import React, { useState } from "react";
import styles from "./signup.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    displayName: "",
    location: "",
  });
  const [isSuccessPopupVisible, setIsSuccessPopupVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccessPopupVisible(true);
      } else {
        const data = await response.json();
        if (response.status === 400) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Username already taken");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to sign up");
    }
  };

  const closePopup = () => {
    setIsSuccessPopupVisible(false);
    setErrorMessage("");
    window.location.href = "/signin";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100 px-4 md:px-0 bg-[url('/background.jpg')] bg-cover">
      <h1 className="text-3xl lg:text-4xl font-bold mb-5 text-center text-white">
        Join Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:mx-4 rounded-2xl max-w-md w-full lg:max-w-3xl md:max-w-2xl border-2 border-gray-600"
      >
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
          <button
            type="submit"
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            Sign Up
          </button>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col text-center">
          <p>Already have an account?</p>
          <a href="/signin" className="text-purple-600 hover:underline">
            Sign in
          </a>
        </div>
      </form>
      {isSuccessPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="mb-4">Successfully signed up!</p>
            <button
              onClick={closePopup}
              className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none transition duration-500 ease-in-out"
            >
              Go to Sign In
            </button>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="mb-4">{errorMessage}</p>
            <button
              onClick={() => setErrorMessage("")}
              className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none transition duration-500 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
