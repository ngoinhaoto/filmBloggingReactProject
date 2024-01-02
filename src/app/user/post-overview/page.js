"use client";
import React from "react";
import NavBarHomePage from "@/components/navbar/NavBarHomePage";
import UserSideBar from "@/app/user/userSideBar/userSideBar";
const isLoggedIn = true;
import Footer from "@/components/footer/Footer";

import { Icon } from "@iconify/react";

export default function PostOverview() {
    return (
        <>
            <div className="bg-white">
                <NavBarHomePage isLoggedIn={isLoggedIn} />

                <div className="container mx-auto p-4 md:p-0">
                    <div className="md:flex">
                        <UserSideBar />
                        <div className="w-full md:w-4/5 p-10 text-center">
                            <h1 className="text-2xl mb-6">Post Overview</h1>

                            <div className="user-overview flex-col flex items-center align-middle justify-center">
                                <div className="flex-row">
                                    <div className="rounded-md bg-slate-400 px-6 py-4">
                                        My Posts
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