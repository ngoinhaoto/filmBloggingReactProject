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
  const [sortByDate, setSortByDate] = useState(new Set(["sortDateAsc"]));
  const [categories, setCategories] = useState(new Set(["Categories"]));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/overview")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.allPosts);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const selectedSortByDate = React.useMemo(
    () => Array.from(sortByDate).join(", ").replaceAll("_", " "),
    [sortByDate]
  );

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
                onSelectionChange={setSortByDate}
              >
                <DropdownItem key="sortDateAsc">
                  Sort by Date: Ascending
                </DropdownItem>
                <DropdownItem key="sortDateDes">
                  Sort by Date: Descending
                </DropdownItem>
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
                <DropdownItem key="Scifi">Sci-Fi</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <section className="flex flex-col">
          {loading ? (
            <div>
              <Skeleton height={200} count={5} />
            </div>
          ) : (
            posts.map((post) => <Post key={post.id} post={post} />)
          )}
        </section>
      </div>
    </>
  );
}
