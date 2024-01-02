"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function UserSideBar() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-1/5">
      <nav className="mt-10">
        <ul className="flex flex-wrap text-center md:text-left">
          <li className="md:w-full w-1/3">
            <Link
              className={`link ${
                pathname === "/user/edit-user-profile"
                  ? "text-purple-600 font-bold"
                  : "text-gray-500"
              }`}
              href="/user/edit-user-profile"
            >
              Edit Information
            </Link>
          </li>
          <li className="md:w-full w-1/3">
            <Link
              className={`link ${
                pathname === "/user/account-overview"
                  ? "text-purple-600 font-bold"
                  : "text-gray-500"
              }`}
              href="/user/account-overview"
            >
              Account Overview
            </Link>
          </li>
          <li className="md:w-full w-1/3">
            <Link
              className={`link ${
                pathname === "/user/post-overview"
                  ? "text-purple-600 font-bold"
                  : "text-gray-500"
              }`}
              href="/user/post-overview"
            >
              Post Overview
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
