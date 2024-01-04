"use client";

import React, { useState } from "react";
import styles from "./signin.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInPage = (props) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
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

    const res = await signIn("credentials", {
      username: formData.username,
      password: formData.password,
      redirect: false,
      // callbackUrl: "/",
    });

    console.log(res);
    if (!res?.error) {
      router.push(props.searchParams?.callbackUrl ?? "http://localhost:3000");
    } else {
      setErrorMessage("Wrong password or username!");
    }

    // if (!res?.error) {
    //   // Redirect upon successful sign-in
    // }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-100 px-4 md:px-0">
      <h1 className="text-3xl lg:text-4xl font-bold mb-5 text-center text-purple-800">
        Sign In
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
            className="border rounded px-4 py-2 w-full focus:outline-none focus:border-purple-800 "
            required
          />
        </div>
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
            className="border rounded px-4 py-2 w-full focus:outline-none focus:border-purple-800"
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            Sign In
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-600 text-center text-sm mt-2">
            {errorMessage}
          </div>
        )}
        <div className="flex flex-col text-center mt-3">
          <p>Not have an account?</p>
          <Link href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
