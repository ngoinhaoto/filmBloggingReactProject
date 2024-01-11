"use client";
import React, { useState, useEffect } from "react";
import PostContent from "./PostContent";

import NavbarHomePage from "../../../components/navbar/NavBarHomePage";
import Footer from "../../../components/footer/Footer";
import CommentSection from "./CommentSection";

const Post = ({ params }) => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/post/${params.id}`);
      if (!response.ok) {
        setNotFound(true);
        return;
      }
      const data = await response.json();
      setPost(data.postDetail);
      if (data.postDetail.comments) {
        setComments(data.postDetail.comments);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  return (
    <div className="bg-slate-100">
      <NavbarHomePage />
      {notFound ? (
        <div className="container mx-auto p-4 text-center">
          <div className="text-4xl font-bold text-red-500">Page not found</div>
        </div>
      ) : post ? (
        <>
          <PostContent post={post} />
          <CommentSection comments={comments} postID={params.id} callback={fetchPost}/>
        </>
      ) : (
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-2">
            <div>Loading...</div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Post;
