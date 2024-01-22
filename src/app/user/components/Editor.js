// ContentEditor.js
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const ContentEditor = ({ content, handleContentChange, errors }) => {
  return (
    <div className="mb-8">
      <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
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
          value={content}
          onEditorChange={handleContentChange}
        />
      </div>
      {errors.content && <p className="text-red-500 text-xs mt-1 ms-1">{errors.content}</p>}
    </div>
  );
};

export default ContentEditor;
