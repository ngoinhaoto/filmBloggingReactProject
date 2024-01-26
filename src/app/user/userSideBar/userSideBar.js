"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Listbox, ListboxItem} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function UserSideBar() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-1/5 m-2">
      <nav>
        <Listbox variant="faded" aria-label="Listbox menu with icons">
          <ListboxItem
          key="edit-info"
          as={Link}
          startContent={<Icon icon="akar-icons:edit" width={22}/>}
          className={`link ${
            pathname === "/user/edit-user-profile"
              ? "text-white bg-purple-600 font-bold py-4 px-4 mb-2"
              : "text-gray-500 py-4 px-4 mb-2 bg-white"
          }`}
          href="/user/edit-user-profile"
          >
            Edit Information
          </ListboxItem>
          <ListboxItem
          key="account"
          as={Link}
          startContent={<Icon icon="uil:user" width="22" />}
          className={`link ${
            pathname === "/user/account-overview"
              ? "text-white bg-purple-600 font-bold py-4 px-4  mb-2"
              : "text-gray-500 py-4 px-4  mb-2 bg-white"
          }`}
          href="/user/account-overview"
          >
            Account Overview
          </ListboxItem>
          <ListboxItem
          key="post"
          as={Link}
          startContent={<Icon icon="streamline:news-paper" width="22" />}
          className={`link ${
            pathname === "/user/post-overview"
              ? "text-white bg-purple-600 font-bold py-4 px-4  mb-2"
              : "text-gray-500 py-4 px-4 mb-2 bg-white"
          }`}
          href="/user/post-overview"
          >
            Post Overview
          </ListboxItem>
        </Listbox>
        
      </nav>
    </div>
  );
}
