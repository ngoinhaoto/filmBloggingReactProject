"use client";
import React, { useState, useEffect } from "react";
import PostContent from "./PostContent";

import NavbarHomePage from "../../../components/navbar/NavBarHomePage";
import Footer from "../../../components/footer/Footer";
import CommentSection from "./CommentSection";
import Author from "./Author";
import { Divider } from "@nextui-org/react";

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
    <div className="bg-white">
      <NavbarHomePage />
      {notFound ? (
        <div className="container xl:px-36 mx-auto mt-5">
          <div className="text-4xl font-bold text-red-500">Page not found</div>
        </div>
      ) : post ? (
        <>
          <div className="flex md:flex-row flex-col-reverse container xl:px-36 mx-auto mt-5">
            <div className="md:basis-4/5">
                <PostContent post={post} />
                <Divider></Divider>
                <CommentSection comments={comments} postID={params.id} callback={fetchPost}/>
            </div>         
            <div className="md:basis-1/5 m-3">
                <Author author={post.author}/>
            </div>
          </div>
        </>
      ) : (
        <div className="container xl:px-36 mx-auto mt-5">
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
