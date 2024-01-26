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
  Switch,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ButtonGroup
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import userFilled from "@iconify/icons-tabler/user-filled";
import timeLine from "@iconify/icons-mingcute/time-line";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Category from "./Category";

import { useEffect } from "react";

import Post from "./Post";
export default function ForumPosts({ searchValue }) {
  const [loading, setLoading] = useState(true);
  const [sortByDate, setSortByDate] = useState(["sortDateDes"]);
  const [categories, setCategories] = useState(new Set([]));
  const [posts, setPosts] = useState([]);
  const [allowNSFW, setAllowNSFW] = useState(true);
  const [allowSpoiledContent, setAllowSpoiledContent] = useState(true);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const categoriesList = Category();

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

  const clearSelectedCategories = () => {
    setCategories(new Set([]));
  }

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

    const passNSFWFilter = allowNSFW || !post.nsfw;

    const passSpoiledContentFilter =
      allowSpoiledContent || !post.spoiledContent; // Show Spoiled Content if allowSpoiledContent is true

    return (
      isInSearch && isInCategories && passNSFWFilter && passSpoiledContentFilter
    );
  });

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filter setting</ModalHeader>
              <ModalBody className="py-0">
                <div className="flex flex-row items-center w-full justify-between">
                  <p>Sort by</p>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="flat"
                        radius="sm"
                        color="secondary"
                        className="capitalize "
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
                </div>
                <div className="flex flex-row items-center w-full justify-between">
                  <div className="flex flex-col">
                    <p className="text-pink-700">Allow NSFW</p>
                    <p className="opacity-50 text-xs">Some posts might contain graphic contents,<br /> sexual violence, etc.</p>
                  </div>
                  
                  <Switch
                    color="danger"
                    checked={allowNSFW}
                    defaultSelected
                    aria-label
                    onChange={() => setAllowNSFW((prev) => !prev)}
                    isIconOnly
                  ></Switch>
                </div>
                <div className="flex flex-row items-center w-full justify-between">
                  <div className="flex flex-col">
                    <p className="text-orange-400">Show Spoiled Contents</p>
                    <p className="opacity-50 text-xs">Some posts may contain spoilers that could <br /> reveal key plot points of certain content.</p>
                  </div>      
                  <Switch
                    color="warning"
                    defaultSelected
                    checked={allowSpoiledContent}
                    onChange={() => setAllowSpoiledContent((prev) => !prev)}
                    isIconOnly
                  ></Switch>
                </div>
                <div>
                  <div className="flex flex-row justify-between items-center w-full mb-2">
                    <p>Categories ({categories.size || 0} selected)</p>
                    <button className="text-red-400 text-sm" onClick={clearSelectedCategories}>Clear</button>
                  </div>
                      
                  <Select
                    label="Categories"
                    placeholder="Select multiple"
                    selectionMode="multiple"
                    className="w-full"
                    radius="sm"
                    variant="flat"
                    color="primary"
                    onSelectionChange={setCategories}
                  >
                    {categoriesList.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter className="mt-4 mb-2">
                <Button color="danger" variant="flat" onPress={onClose} radius="sm" className="w-full py-6">
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="md:basis-3/4 md:m-3 m-6">
        <div className="flex mb-4 justify-between w-full">
          <h2 className="font-bold mb-2 text-3xl ">Post Space!</h2>
          <div>
          </div>
          <Button variant="faded" onPress={onOpen} radius="sm" isIconOnly>
            <Icon icon="mi:filter" color="#9333ea" width="20" height="20"/>
          </Button>
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
