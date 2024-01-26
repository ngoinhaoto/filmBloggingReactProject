"use client"
import React, {useState, useEffect} from "react";
import NavbarHomePage from "../../../../../components/navbar/NavBarHomePage";
import { useSession, getSession } from "next-auth/react";
import { useParams } from "next/navigation";
import PostForm from "../../../components/PostForm";
import { Link, Button, Modal, ModalContent,ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
const isLoggedIn = true;
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export default function EditPostPage({params}) {

    const { data: session, status } = useSession();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState(null);
    const [nsfw, setNsfw] = useState(false);
    const [spoiled, setSpoiled] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [thumbnail, setThumbnail] = useState("");
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [incomingPostId, setIncomingPostId] = useState(0);

    async function getPostDetails() {
        try {
          if (status === "authenticated" && session?.user?.id) {
            const response = await fetch(`/api/post/${params.postId}`);
            if (response.ok) {
              const fetchedPost = await response.json();
              const post = fetchedPost.postDetail
              console.log(post)
              setTitle(post.title)
              setContent(post.content)
              setCategories(post.categories)
              setSpoiled(post.spoiledContent)
              setNsfw(post.nsfw)
              setThumbnail(post.thumbnail)
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
      if (params.postId) {
        getPostDetails()
      }
    }, [params.postId, session, status]);

      const handleContentChange = (content, editor) => {
        setContent(content);
      };
    
      const handleCategoryChange = (selectedItems) => {
        setCategories(selectedItems);
      };

      const handleModalOpen = (postIdNumber) => {
        onOpen();
        setIncomingPostId(postIdNumber);
      }
    
      const closeModal = () => {
        router.push("/user/post-overview")
      }
    
      const router = useRouter()

      const handlePublish = async (e) => {
        e.preventDefault();
    
        setIsLoading(true);
    
        if (isFormValid) { 
    
          try {
            const categoriesArray = [...categories];
            const bodyData = {
              title,
              content,
              categories: categoriesArray,
              nsfw,
              spoiled,
              thumbnail,
            };
    
            const response = await fetch(`/api/post/${params.postId}`, {
              method: "PUT",
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
        <>
        <NavbarHomePage isLoggedIn={isLoggedIn} />
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
          <h1 className="text-4xl font-semibold mb-8 text-center">Edit Post</h1>
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
            handlePublish={handlePublish}
            setContent={setContent}
            setThumbnail={setThumbnail}
            thumbnail={thumbnail}
            handleCategoryChange={handleCategoryChange}
            handleContentChange={handleContentChange}
            isFormValid={isFormValid}
            setIsFormValid={setIsFormValid}
            isLoading={isLoading}
          />
        </div>
        </>
    )
}