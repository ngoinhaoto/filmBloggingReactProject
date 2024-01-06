"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut();
  };
  const handleSignIn = () => {
    signIn();
  };

  if (status === "loading") {
    return null; // or render a loading indicator
  }

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className="text-3xl font-['Courier']">
                MovieMuncher
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-purple-800 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              
              <Input type="text" variant="flat" label="Search" size="sm" className="w-50"/>
              {session && session.user ? (
                <>
                  <Button color="secondary" variant="shadow" className="font-bold rounded-md flex flex-row items-center justify-center py-6" href="/user/create-post" as={Link}>
                    <Icon icon="basil:add-solid" color="white" width="30" height="30"/>
                    Create Post
                  </Button>  
                  <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                      <User
                        as="button"
                        className="transition-transform flex-row-reverse text-start"
                        description={`@${session.user.username}`}
                        name={session.user.displayName}
                        showFallback
                        avatarProps={{
                          isBordered: true,
                          src:`${session.user.avatar}`,
                        }}
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                      <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Signed in as</p>
                        <p className="font-bold">@{session.user.username}</p>
                      </DropdownItem>
                      <DropdownItem key="settings" href="/user/account-overview" as={Link}>My Profile</DropdownItem>
                      <DropdownItem key="team_settings" href="/user/post-overview" as={Link}>Post Management</DropdownItem>
                      <DropdownItem key="system" href="/user/edit-user-profile" as={Link}>Settings</DropdownItem>
                      <DropdownItem key="logout" color="danger" className="text-danger" onClick={handleSignOut}>Sign Out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </>
              ) : (
                <>
                  {/* <a
                    href="/signup"
                    className="px-4 py-2 bg-purple-600 text-white rounded-md"
                  >
                    Sign Up
                  </a> */}
                  <button
                    onClick={handleSignIn}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
           
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {session && session.user ? (
              <>
                <Link
                  href="/create-post"
                  className="block px-4 py-2 text-left w-full bg-purple-800 text-white  hover:bg-purple-600 hover:text-white rounded-md"
                >
                  Create Post
                </Link>
                <Link
                  href="/user/edit-user-profile/"
                  className="block px-4 py-2 text-left w-full bg-orange-800 text-white hover:bg-purple-600 hover:text-white rounded-md flex items-center"
                >
                  <span>User Profile </span>
                  <Icon
                    className="text-2xl ml-2"
                    icon="iconamoon:profile-circle-fill"
                  />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 text-left w-full bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-500 ease-in-out"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                {/* <a
                  href="/signup"
                  className="block px-4 py-2 text-left w-full text-white bg-purple-600 hover:bg-purple-800  rounded-md"
                >
                  Sign Up
                </a> */}
                <button
                  onClick={handleSignIn}
                  className="block  px-4 py-2 text-left w-full text-white bg-purple-600 hover:bg-purple-800  rounded-md"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
