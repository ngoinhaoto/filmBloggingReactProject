import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
  onPress,
  onOpenChange
} from "@nextui-org/react";

export default function PostList({ fetchUserData, posts }) {

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState(null)

  const openModal = (toBeDeletePost) => {
    onOpen();
    setSelectedPost(toBeDeletePost);
  }

  const closeModal = () => {
    onClose()
  }

  const formatDateTime = (originalDateTime) => {
    const dateTime = new Date(originalDateTime)
    const formattedDateTime = dateTime.toLocaleString();
    return formattedDateTime
  }

  async function deletePost(deletePostId) {
    try {
      const response = await fetch(`/api/post/${deletePostId}`, {
        method: "DELETE"
      });

      if (response.ok) {
        closeModal();
        fetchUserData();
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    (posts && posts.map((post) =>
      <>
        <div className="flex flex-row justify-between items-center px-4 py-2 bg-white shadow-md rounded-lg mb-4" key={post.id}>
          <a href={`/user/post-overview/edit-post/${post.id}`} className="md:basis-3/5 text-start">
            {post.title}
          </a>
          <div className="md:basis-2/5 flex flex-row items-center justify-between">

            <div>{formatDateTime(post.createdAt)}</div>
            <div>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button variant="light" isIconOnly>
                    <Icon
                      icon="pepicons-pencil:dots-y"
                      color="#6b21a8"
                      width="30"
                      height="30"
                      className="m-0"
                    />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions">
                  <DropdownItem color="default" as={Link} href={`/post/${post.id}`} target="blank">
                    View post
                  </DropdownItem>
                  <DropdownItem color="danger" onPress={() => openModal(post.id)}>
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            classNames={{
              backdrop:
                "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
            }}
          >
            <ModalContent className="text-center">
              {(onClose) => (
                <>
                  <ModalBody>
                    <p className="mt-4">
                      Are you sure want to delete?
                    </p>
                  </ModalBody>
                  <ModalFooter className="justify-center">
                    <Button
                      color="default"
                      onPress={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => deletePost(selectedPost)}
                    >
                      Delete
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>

      </>
    ))

  )
}