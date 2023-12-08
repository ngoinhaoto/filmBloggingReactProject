"use client";
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function ForumPosts() {
  const [sortByDate, setSortByDate] = React.useState(new Set(["sortDateAsc"]));
  const [categories, setCategories] = React.useState(new Set(["Categories"]))

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
                className="capitalize rounded-md bg-purple-600 text-white"
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
              <DropdownItem key="sortDateAsc">Sort by Date: Ascending</DropdownItem>
              <DropdownItem key="sortDateDes">Sort by Date: Descending</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button 
                className="capitalize rounded-md bg-purple-600 text-white ms-2"
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
          <a
            href="/post"
            className="bg-white flex shadow-lg rounded-lg flex-col md:flex-row"
          >
            <div className="md:basis-1/4">
              <img src="board.jpg" alt="thumbnail" className="rounded-l-lg" />
            </div>
            <div className="md:basis-3/4 flex-col p-6">
              <div className="text-xl font-medium">
                This film sucks. Don't watch it
              </div>
              <div className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </div>
            </div>
          </a>
        </section>
        
      </div>
    </>
  );
}
