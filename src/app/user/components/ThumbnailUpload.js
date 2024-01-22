// ThumbnailUpload.js
import React from "react";
import { UploadButton } from "../../../utils/uploadthing";

const ThumbnailUpload = ({ onUploadComplete, onUploadError, errors, thumbnail }) => {
  return (
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
        onClientUploadComplete={onUploadComplete}
        onUploadError={onUploadError}
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
  );
};

export default ThumbnailUpload;
