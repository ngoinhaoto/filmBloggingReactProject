// CreatePostForm.js
"use client"
import React, { useEffect, useState } from "react";
import TitleInput from "./TitleInput";
import CategoriesSelect from "./CategoriesSelect";
import Switches from "./Switches";
import ContentEditor from "./Editor";
import ThumbnailUpload from "./ThumbnailUpload";
import { Button, Link } from "@nextui-org/react";

const PostForm = ({
  title,
  setTitle,
  categories,
  setCategories,
  nsfw,
  setNsfw,
  spoiled,
  setSpoiled,
  content,
  setContent,
  handlePublish,
  setThumbnail,
  thumbnail,
  isFormValid,
  setIsFormValid,
  handleCategoryChange,
  handleContentChange,
  isLoading,
  existedThumbnail
}) => {
    const [errors, setErrors] = useState({});

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

  useEffect(() => {
    validateForm();
  }, [title, content, categories, thumbnail]);

  return (
    <form
          className="bg-white shadow-md rounded-lg p-6"
          onSubmit={handlePublish}
        >
          <TitleInput value={title} onChange={setTitle} errors={errors} />
          <CategoriesSelect
            selectedItems={categories}
            handleCategoryChange={handleCategoryChange}
            errors={errors}
          />
          <Switches
            nsfw={nsfw}
            spoiled={spoiled}
            onNsfwChange={(checked) => setNsfw(checked.target.checked)}
            onSpoiledChange={(checked) => setSpoiled(checked.target.checked)}
          />
          <ContentEditor
            content={content}
            handleContentChange={handleContentChange}
            errors={errors}
          />
          <ThumbnailUpload
            onUploadComplete={(res) => {
              setThumbnail(res[0].url);
              alert("Upload Completed");
            }}
            onUploadError={(error) => {
              alert(`ERROR! ${error.message}`);
            }}
            errors={errors}
            thumbnail={thumbnail}
          />
          <div className="flex md:flex-row flex-col justify-end gap-3">
            <Button as={Link} href="/user/post-overview" variant="shadow" color="default" className="font-bold py-6 px-8">Cancel</Button>
            <Button type="submit" variant="shadow" color="secondary" className="font-bold py-6 px-8" isDisabled={isFormValid ? false : true} isLoading={isLoading ? true : false}>Publish</Button>
          </div>
    </form>
  );
};

export default PostForm;
