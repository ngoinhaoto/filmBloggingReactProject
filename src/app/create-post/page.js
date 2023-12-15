"use client";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Navbar from "@/components/navbar/NavBarHomePage";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Switch,
} from "@nextui-org/react";

import Footer from "@/components/footer/Footer";
const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [nsfw, setNsfw] = useState(false);
  const [spoiled, setSpoiled] = useState(false);

  const handlePublish = (e) => {
    e.preventDefault();
    // handle submission
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Category:", category);
    console.log("NSFW:", nsfw);
    console.log("Spoiled:", spoiled);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold mb-8 text-center">Create Post</h1>
        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-purple-500"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center mb-6">
              <label
                htmlFor="categories"
                className="block text-gray-700 font-bold mb-2 mr-4"
              >
                Categories:
              </label>
              <Dropdown placeholder="Select category" bordered>
                <DropdownTrigger>
                  <Button color="secondary">
                    {category || "Select category"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem onClick={() => setCategory("Horror")}>
                    Horror
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Fantasy")}>
                    Fantasy
                  </DropdownItem>
                  <DropdownItem onClick={() => setCategory("Action")}>
                    Action
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700 font-bold">NSFW:</span>
              <Switch
                color="secondary"
                checked={nsfw}
                onChange={(checked) => setNsfw(checked)}
              />
            </div>
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700 font-bold">
                Spoiled Content:
              </span>
              <Switch
                color="secondary"
                checked={spoiled}
                onChange={(checked) => setSpoiled(checked)}
              />
            </div>
          </div>
          <div className="mb-8">
            <label
              htmlFor="content"
              className="block text-gray-700 font-bold mb-2"
            >
              Content
            </label>
            <Editor
              apiKey="zxirgmsu4aopej2bbk4zbnvg3k2gn4p324z0i5uf2vwxxgch"
              init={{
                plugins:
                  "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant")
                  ),
              }}
              initialValue="Enter your post here!"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500 block mx-auto"
          >
            Publish
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePostPage;
