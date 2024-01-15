"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { useRouter, useSearchParams } from "next/navigation";

export default function NavbarHomePage({ onSearchChange = () => {} }) {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    // Call the callback function to pass the search value to the parent (Home) component
    onSearchChange(value);
  };

  // const handleSearchChange = (e) => {
  //   const query = e.target.value;
  //   setSearchQuery(query);

  //   // Update the URL with the search query
  //   // const url = query ? `/?search=${encodeURIComponent(query)}` : "/";
  //   // router.push(url);
  // };

  if (status === "loading") {
    return null;
  }

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
    return null;
  }

  return (
    <>
      <Navbar isBordered shouldHideOnScroll>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <a href="/" className="text-3xl font-['Courier']">
              MovieMuncher
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-6" justify="start">
          <NavbarItem>
            <a href="/" className="text-3xl font-['Courier']">
              MovieMuncher
            </a>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex">
          <Input
            type="text"
            variant="flat"
            label="Search for posts"
            size="sm"
            className="w-50"
            value={searchValue}
            onChange={handleSearchChange}
          />

          {session && session.user ? (
            <>
              <Button
                color="secondary"
                variant="shadow"
                className="font-bold rounded-md flex flex-row items-center justify-center py-6"
                href="/user/create-post"
                as={Link}
                style={{ minWidth: "50px", minHeight: "50px" }}
              >
                <Icon
                  icon="basil:add-solid"
                  color="white"
                  width="120"
                  height="120"
                />
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
                      src: `${session.user.avatar}`,
                    }}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@{session.user.username}</p>
                  </DropdownItem>
                  <DropdownItem
                    key="settings"
                    href="/user/account-overview"
                    as={Link}
                  >
                    My Profile
                  </DropdownItem>
                  <DropdownItem
                    key="team_settings"
                    href="/user/post-overview"
                    as={Link}
                  >
                    Post Management
                  </DropdownItem>
                  <DropdownItem
                    key="system"
                    href="/user/edit-user-profile"
                    as={Link}
                  >
                    Settings
                  </DropdownItem>
                  <DropdownItem
                    key="logout"
                    color="danger"
                    className="text-danger"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          ) : (
            <>
              <button
                onClick={handleSignIn}
                className="px-4 py-2 bg-purple-600 text-white rounded-md"
              >
                Sign In
              </button>
            </>
          )}
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </NavbarMenuItem>
          {session && session.user ? (
            <>
              <NavbarMenuItem>
                <Link
                  href="/create-post"
                  className="block px-4 py-2 text-left w-full bg-purple-800 text-white  hover:bg-purple-600 hover:text-white rounded-md"
                >
                  Create Post
                </Link>
              </NavbarMenuItem>

              <NavbarMenuItem>
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
              </NavbarMenuItem>

              <NavbarMenuItem>
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 text-left w-full bg-red-600 text-white rounded-md hover:bg-red-800 transition duration-500 ease-in-out"
                >
                  Sign Out
                </button>
              </NavbarMenuItem>
            </>
          ) : (
            <>
              {/* <a
                  href="/signup"
                  className="block px-4 py-2 text-left w-full text-white bg-purple-600 hover:bg-purple-800  rounded-md"
                >
                  Sign Up
                </a> */}
              <NavbarMenuItem>
                <button
                  onClick={handleSignIn}
                  className="block  px-4 py-2 text-left w-full text-white bg-purple-600 hover:bg-purple-800  rounded-md"
                >
                  Sign In
                </button>
              </NavbarMenuItem>
            </>
          )}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
