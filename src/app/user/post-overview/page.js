"use client";
import React, { useState } from "react";
import NavBarHomePage from "@/components/navbar/NavBarHomePage";
import UserSideBar from "@/app/user/userSideBar/userSideBar";
const isLoggedIn = true;
import Footer from "@/components/footer/Footer";

import { Icon } from "@iconify/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function PostOverview() {

    const [filteredPost, setFilterdPost] = useState('');
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div className="bg-gray-100">
                <NavBarHomePage isLoggedIn={isLoggedIn} />

                <div className="container mx-auto p-4 md:p-0">
                    <div className="md:flex">
                        <UserSideBar />
                        <div className="w-full md:w-4/5 p-10 text-center">
                            <h1 className="text-2xl mb-6">Post Overview</h1>

                            <div className="user-overview flex-col flex items-center align-middle justify-center">
                                <div className="flex md:flex-row w-full gap-7 justify-center flex-col">
                                    <div className="rounded-xl bg-white flex flex-col shadow-md md:w-1/5 items-start w-full">
                                        <div className="flex flex-row px-6 py-4 items-center">
                                            <div className="m-0">
                                                <Icon icon="ic:baseline-post-add" color="#6b21a8"  width="50" height="50" />
                                            </div>
                                            <div className="flex-col text-start ms-4">
                                                <div className="text-slate-400">My Posts</div>
                                                <div className="font-bold text-3xl">20</div>
                                            </div>
                                        </div>
                                        <button className="w-full text-center py-2 bg-slate-100 rounded-b-xl hover:bg-slate-400 hover:text-white">View</button>                                   
                                    </div>
                                    <div className="rounded-xl bg-white flex flex-col shadow-md md:w-1/5 items-start w-full">
                                        <div className="flex flex-row px-6 py-4 items-center">
                                            <div className="m-0">
                                                <Icon icon="material-symbols:public" color="#6b21a8" width="50" height="50" />
                                            </div>
                                            <div className="flex-col text-start ms-4">
                                                <div className="text-slate-400">Published</div>
                                                <div className="font-bold text-3xl">4</div>
                                            </div>
                                        </div>
                                        <button className="w-full text-center py-2 bg-slate-100 rounded-b-xl hover:bg-slate-400 hover:text-white">View</button>                                   
                                    </div>
                                    <div className="rounded-xl bg-white flex flex-col shadow-md md:w-1/5 items-start w-full">
                                        <div className="flex flex-row px-6 py-4 items-center">
                                            <div className="m-0">
                                                <Icon icon="material-symbols:lock-outline" color="#6b21a8" width="50" height="50" />
                                            </div>
                                            <div className="flex-col text-start ms-4">
                                                <div className="text-slate-400">Draft</div>
                                                <div className="font-bold text-3xl">10</div>
                                            </div>
                                        </div>
                                        <button className="w-full text-center py-2 bg-slate-100 rounded-b-xl hover:bg-slate-400 hover:text-white">View</button>                                  
                                    </div>
                                </div>
                                <div className="flex flex-col w-full mt-8">
                                    <div className="flex flex-row justify-between items-center px-4 py-2 bg-white shadow-md rounded-lg">
                                        <a href="" className="md:basis-3/5 text-start">This is post title</a>
                                        <div className="md:basis-1/5 flex flex-row items-center justify-between">
                                            <Chip color="secondary" className="text-xs uppercase font-extrabold">Published</Chip>
                                            <div>
                                                <Dropdown placement="bottom-end">
                                                    <DropdownTrigger>
                                                        <Button variant="light"><Icon icon="pepicons-pencil:dots-y" color="#6b21a8" width="30" height="30" className="m-0"/></Button>
                                                    </DropdownTrigger>
                                                    <DropdownMenu aria-label="Dynamic Actions">
                                                        <DropdownItem color="default">View post</DropdownItem>
                                                        <DropdownItem color="default">Unpublish</DropdownItem>
                                                        <DropdownItem color="danger">
                                                        <Button onPress={onOpen}>Open Modal</Button>
                                                            <Modal 
                                                                backdrop="opaque" 
                                                                isOpen={isOpen} 
                                                                onOpenChange={onOpenChange}
                                                                classNames={{
                                                                backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                                                                }}
                                                            >
                                                                <ModalContent>
                                                                {(onClose) => (
                                                                    <>
                                                                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                                                    <ModalBody>
                                                                        <p> 
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                                                        </p>
                                                                        <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                                                        </p>
                                                                        <p>
                                                                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                                                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                                                                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                                                                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                                                                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                                                        </p>
                                                                    </ModalBody>
                                                                    <ModalFooter>
                                                                        <Button color="danger" variant="light" onPress={onClose}>
                                                                        Close
                                                                        </Button>
                                                                        <Button color="primary" onPress={onClose}>
                                                                        Action
                                                                        </Button>
                                                                    </ModalFooter>
                                                                    </>
                                                                )}
                                                                </ModalContent>
                                                            </Modal>
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}