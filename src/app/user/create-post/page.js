"use client";
import React, { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Navbar from "../../../components/navbar/NavBarHomePage";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Switch,
} from "@nextui-org/react";
import { Select, SelectItem, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";


import { useRouter } from "next/navigation";
import Footer from "../../../components/footer/Footer";

import { UploadButton } from "../../../utils/uploadthing";

// import "@uploadthing/react/styles.css";

const CreatePostPage = (props) => {
  const currentTime = new Date(); // Get current timestamp
  const { data: session, status } = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState(null);
  const [nsfw, setNsfw] = useState(false);
  const [spoiled, setSpoiled] = useState(false);
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

  const [thumbnail, setThumbnail] = useState(null);


  const router = useRouter()

  const handleContentChange = (content, editor) => {
    setContent(content);
  };

  const handleCategoryChange = (selectedItems) => {
    setCategories(selectedItems);
  };

  const validateForm = () => {
    let errors = {}
    if (!title) {
      errors.title = "Please enter a title";
      errors.titleBoolean = true;
    } 

    if (!content) {
      errors.content = "Content cannot be empty";
    } else if (content.length < 30) {
      errors.content = "Content must be at least 30"
    }

    if (!categories) {
      errors.categories = "Select at least one category"
      errors.categoriesBoolean = true;
    }

    if (!thumbnail) {
      errors.thumbnail = "Upload your thumbnail"
      errors.thumbnailBoolean = true;
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  }

  const handlePublish = async (e) => {
    e.preventDefault();

    await validateForm();

    if (isFormValid) { 

      const categoriesArray = [...categories];

      const userId = session.user.id;
      const bodyData = {
        title,
        content,
        categories: categoriesArray,
        nsfw,
        spoiled,
        published: true,
        createdAt: currentTime.toISOString(),
        userId,
        thumbnail,
      };

      try {
        const response = await fetch(`/api/post`, {
          method: "POST",
          body: JSON.stringify(bodyData),
        });

        const inputPost = await response.json();
        console.log(inputPost);

        // if (inputPost.post.id) {
          router.push(`/post/${inputPost.post.id}`);
        // }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold mb-8 text-center">Create Post</h1>
        <form
          className="bg-white shadow-md rounded-lg p-6"
          onSubmit={handlePublish}
        >
          <div className="mb-6">
            <Input
              type="text" 
              label="Title" 
              variant="bordered" 
              placeholder="Your post title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              required
              isInvalid={errors.titleBoolean}
              errorMessage={errors.title}
            >
            </Input>
          </div>
          <div className="flex items-center mb-6">
            <Select
              label="Categories"
              placeholder="Select multiple"
              selectionMode="multiple"
              className="max-w-xs"
              variant="bordered"
              onSelectionChange={handleCategoryChange}
              isInvalid={errors.categoriesBoolean}
              errorMessage={errors.categories}
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
          <div className="flex justify-between">
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700 font-bold">NSFW:</span>
              <Switch
                color="secondary"
                checked={nsfw}
                onChange={(checked) => setNsfw(checked.target.checked)}
              />
            </div>
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700 font-bold">
                Spoiled Content:
              </span>
              <Switch
                color="secondary"
                checked={spoiled}
                onChange={(checked) => setSpoiled(checked.target.checked)}
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
            <div className={errors.content ? "outline outline-pink-700 rounded-lg" : "outline-none"}>
              <Editor
              apiKey="zxirgmsu4aopej2bbk4zbnvg3k2gn4p324z0i5uf2vwxxgch"
              init={{
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount ",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
              }}
              initialValue="Enter your post here!"
              onEditorChange={handleContentChange}
            />
            </div>
            
            {errors.content && <p className="text-red-500 text-xs mt-1 ms-1">{errors.content}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="thumbnail"
              className="block text-gray-700 font-bold mb-2"
            >
              Thumbnail
            </label>
            <UploadButton
              className={errors.thumbnail ? "outline outline-offset-2 outline-pink-700 rounded-lg" : "outline-none"}
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setThumbnail(res[0].url);

                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
              appearance={{
                button:
                  "ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none bg-red-500 bg-none after:bg-orange-400",
                container:
                  "w-max flex-row rounded-md border-cyan-300 bg-slate-800",
                allowedContent:
                  "flex h-8 flex-col items-center justify-center px-2 text-white",
              }}
            />
            {errors.thumbnail && <p className="text-red-500 text-xs mt-1 ms-1">{errors.thumbnail}</p>}
            {thumbnail && (
              <div className="mb-4 mt-4">
                <h3 className="text-md font-bold mb-2">Thumbnail Preview</h3>
                <img
                  src={thumbnail}
                  alt="thumbnail preview"
                  className="w-32 h-32 object-cover rounded-md border border-gray-300"
                />
              </div>
            )}
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
