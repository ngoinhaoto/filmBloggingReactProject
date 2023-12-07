"use client"
import { useState } from "react";

export default function ForumOverview() {
    const [forumPosts, setForumPosts] = useState('0');
    const [forumUsers, setForumUsers] = useState('0');

    return (
        <>
            <div className="md:basis-3/4 p-6 m-2">
                <h2 className="font-bold mb-2">FORUM POST</h2>
                <section className="flex flex-col">
                    <a href="/post" className="bg-white flex shadow-lg rounded-lg flex-col md:flex-row">
                    <div className="md:basis-1/4">
                        <img src="board.jpg" alt="thumbnail" className="rounded-l-lg"/>
                    </div>
                    <div className="md:basis-3/4 flex-col p-6">
                        <div className="text-xl font-medium">This film sucks. Don't watch it</div>
                        <div className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</div>
                    </div>
                    </a>
                </section>
            </div>
        </>
    )
}