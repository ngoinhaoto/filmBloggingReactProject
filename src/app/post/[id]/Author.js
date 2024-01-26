import React from "react";
import { User, Avatar, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Author({author}) {
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
        <div className=" rounded-xl bg-white">
                <p className="uppercase font-bold text-gray-400 mb-2">Posted by</p>
                <div className="p-6 border rounded-lg">
                    <a href={`/profile/${author.id}`} className="mb-4 flex">
                        <Avatar
                            isBordered="true"
                            size="lg"
                            src={`${author.avatar}`}
                            className="mr-3"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-lg font-bold">{author.displayName}</p>
                            <p className="text-gray-400 text-sm">@{author.username}</p>
                        </div>
                    </a>
                    
                    <Divider/>
                    <div className="flex-col mt-4 text-gray-700">
                        <div className="flex flex-row items-center mb-2">
                            <Icon icon="mingcute:navigation-fill" width={22} className="mr-1"/>
                            {author.location}
                        </div>
                        <div className="flex flex-row items-center mb-2">
                            <Icon icon="mingcute:time-fill" width={22} className="mr-1"/>
                            Joined {calculateDaysAgo(author.createdAt)}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}