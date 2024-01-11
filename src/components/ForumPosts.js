"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import userFilled from "@iconify/icons-tabler/user-filled";
import timeLine from "@iconify/icons-mingcute/time-line";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useEffect } from "react";

import Post from "./Post";
export default function ForumPosts({ searchValue }) {
  const [loading, setLoading] = useState(true);
  const [sortByDate, setSortByDate] = useState(["sortDateDes"]);
  const [categories, setCategories] = useState(new Set([]));
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

  const filteredPosts = posts.filter((post) => {
    const isInSearch =
      !searchValue || // if searchValue is empty, consider all posts
      post.title.toLowerCase().includes(searchValue.toLowerCase()) || //  if the title includes the searchValue
      post.content.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.author.displayName.toLowerCase().includes(searchValue.toLowerCase());
    //  if the content includes the searchValue

    const isInCategories =
      categories.size === 0 || // if no categories are selected, consider all categories
      Array.from(categories).every((category) =>
        post.categories.includes(category)
      ); // check if the post belongs to all selected categories

    return isInSearch && isInCategories;
  });

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
            <Select
              label="Categories"
              placeholder="Select multiple"
              selectionMode="multiple"
              className="max-w-xs"
              variant="bordered"
              onSelectionChange={setCategories}
            >
              <SelectItem key="horror" value="horror">
                Horror
              </SelectItem>
              <SelectItem key="fantasy" value="fantasy">
                Fantasy
              </SelectItem>
              <SelectItem key="action" value="action">
                Action
              </SelectItem>
              <SelectItem key="experimental" value="experimental">
                Experimental
              </SelectItem>
              <SelectItem key="comedy" value="comedy">
                Comedy
              </SelectItem>
              <SelectItem key="romance" value="romance">
                Romance
              </SelectItem>
            </Select>
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
            filteredPosts.map((post) => <Post key={post.id} post={post} />)
          )}
        </section>
      </div>
    </>
  );
}
