"use client"
import React, { useState, useEffect } from "react";
import { Divider, Button, User, Link, Avatar } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function UserInformation({ user }) {
    const calculateDaysAgo = (timestamp) => {
        const millisecondsPerMinute = 60 * 1000;
        const millisecondsPerHour = 60 * millisecondsPerMinute;
        const currentDate = new Date();
        const postDate = new Date(timestamp);
    
        const differenceInMilliseconds = currentDate - postDate;
    
        if (differenceInMilliseconds < millisecondsPerHour) {
          const minutesAgo = Math.floor(
            differenceInMilliseconds / millisecondsPerMinute
          );
          return `${
            minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`
          }`;
        } else if (differenceInMilliseconds < 24 * millisecondsPerHour) {
          const hoursAgo = Math.floor(
            differenceInMilliseconds / millisecondsPerHour
          );
          return `${hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`}`;
        } else {
          const daysAgo = Math.floor(
            differenceInMilliseconds / (24 * millisecondsPerHour)
          );
          return `${daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`}`;
        }
    };

    return (
        <>
            <div className="shadow-lg rounded-xl bg-white">
                <img src="/board.jpg" alt="banner" className="rounded-t-xl" />
                <div className="p-6">
                        <User
                        name={user.displayName}
                        description={`@${user.username}`}
                        avatarProps={{
                          src: `${user.avatar}`
                        }}
                        className="mb-4"/>                     
                    
                    <Divider/>
                    <div className="flex-col mt-4 text-gray-700">
                        <div className="flex flex-row items-center mb-2">
                            <Icon icon="mingcute:navigation-fill" width={22} className="mr-1"/>
                            {user.location}
                        </div>
                        <div className="flex flex-row items-center mb-2">
                            <Icon icon="mingcute:time-fill" width={22} className="mr-1"/>
                            Joined {calculateDaysAgo(user.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}