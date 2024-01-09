"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import userFilled from "@iconify/icons-tabler/user-filled";
import timeLine from "@iconify/icons-mingcute/time-line";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useEffect } from "react";

import Post from "./Post";
export default function ForumPosts() {
  const [loading, setLoading] = useState(true);
  const [sortByDate, setSortByDate] = useState(["sortDateDes"]);
  const [categories, setCategories] = useState(new Set(["Categories"]));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/overview")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.allPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  const sortPosts = (sortOrder) => {
    const sorted = [...posts].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "sortDateAsc" ? dateA - dateB : dateB - dateA;
    });
    setPosts(sorted);
  };

  const handleSortChange = (keys) => {
    const sortOrder = keys.has("sortDateAsc") ? "sortDateAsc" : "sortDateDes";
    setSortByDate([sortOrder]);
    sortPosts(sortOrder);
  };

  const selectedSortByDate =
    sortByDate[0] === "sortDateAsc" ? "Oldest Post First" : "Newest Post First";

  const selectedCategories = React.useMemo(
    () => Array.from(categories).join(", ").replaceAll("_", " "),
    [categories]
  );

  return (
    <>
      <div className="md:basis-3/4 p-6 m-2">
        <div className="flex mb-4 justify-between w-full">
          <h2 className="font-bold mb-2 text-3xl ">Post Space!</h2>
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="faded"
                  radius="sm"
                  color="secondary"
                  className="capitalize ms-2"
                >
                  {selectedSortByDate}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Sort-by-date"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={sortByDate}
                onSelectionChange={handleSortChange}
              >
                <DropdownItem key="sortDateAsc">Oldest Post First</DropdownItem>
                <DropdownItem key="sortDateDes">Newest Post First</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="faded"
                  radius="sm"
                  color="secondary"
                  className="capitalize ms-2"
                >
                  {selectedCategories}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={categories}
                onSelectionChange={setCategories}
              >
                <DropdownItem key="horror">Horror</DropdownItem>
                <DropdownItem key="fantasy">Fantasy</DropdownItem>
                <DropdownItem key="comedy">Comedy</DropdownItem>
                <DropdownItem key="action">Action</DropdownItem>
                <DropdownItem key="experimental">Experimental</DropdownItem>
                <DropdownItem key="romance">Romance</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <section className="flex flex-col">
          {loading ? (
            <div>
              <div>
                <Skeleton
                  height={200}
                  count={5}
                  style={{
                    borderRadius: "10px", // Rounded corners
                    marginBottom: "20px", // Adjust margin as needed
                  }}
                />
              </div>
            </div>
          ) : (
            posts.map((post) => <Post key={post.id} post={post} />)
          )}
        </section>
      </div>
    </>
  );
}
