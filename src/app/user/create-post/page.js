"use client";
import React, { useState } from "react";
import Navbar from "../../../components/navbar/NavBarHomePage";
import { Link, Button, Modal, ModalContent,ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Footer from "../../../components/footer/Footer";
import PostForm from "../components/PostForm";

// import "@uploadthing/react/styles.css";

const CreatePostPage = (props) => {
  const currentTime = new Date(); // Get current timestamp
  const { data: session, status } = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("Enter your post here!");
  const [categories, setCategories] = useState(null);
  const [nsfw, setNsfw] = useState(false);
  const [spoiled, setSpoiled] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [incomingPostId, setIncomingPostId] = useState(0);

  const handleModalOpen = (postIdNumber) => {
    onOpen();
    setIncomingPostId(postIdNumber);
  }

  const closeModal = () => {
    router.push("/user/post-overview")
  }

  const router = useRouter()

  const handleContentChange = (content, editor) => {
    setContent(content);
  };

  const handleCategoryChange = (selectedItems) => {
    setCategories(selectedItems);
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (isFormValid) { 

      try {
        const categoriesArray = [...categories];

        const userId = session.user.id;
        const bodyData = {
          title,
          content,
          categories: categoriesArray,
          nsfw,
          spoiled,
          createdAt: currentTime.toISOString(),
          userId,
          thumbnail,
        };

        const response = await fetch(`/api/post`, {
          method: "POST",
          body: JSON.stringify(bodyData),
        });

        const inputPost = await response.json();
        // if (inputPost.post.id) {
        handleModalOpen(inputPost.post.id)
        // }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar isLoggedIn={true} />
      <Modal backdrop="blur" isOpen={isOpen} onClose={closeModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="mt-4">
                <div className="flex flex-col items-center justify-between">
                  <p className="font-bold text-xl mb-3">Post Successfully!</p>
                  <Icon icon="line-md:confirm-circle" width="70" height="70" color="#d8b4fe" />
                </div>
              </ModalBody>
              <ModalFooter  className="flex flex-col">
                <Button as={Link} className="bg-purple-600 text-white" href={`/post/${incomingPostId}`}>
                  View Post
                </Button>
                <Button as={Link} color="default" variant="flat" href="/user/create-post">
                  Create a new post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-semibold mb-8 text-center">Create Post</h1>
        <PostForm
          title={title}
          setTitle={setTitle}
          categories={categories}
          setCategories={setCategories}
          nsfw={nsfw}
          setNsfw={setNsfw}
          spoiled={spoiled}
          setSpoiled={setSpoiled}
          content={content}
          setContent={setContent}
          handlePublish={handlePublish}
          setThumbnail={setThumbnail}
          thumbnail={thumbnail}
          handleCategoryChange={handleCategoryChange}
          handleContentChange={handleContentChange}
          isFormValid={isFormValid}
          setIsFormValid={setIsFormValid}
          isLoading={isLoading}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CreatePostPage;
