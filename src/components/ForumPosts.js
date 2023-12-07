"use client"
export default function ForumPosts() {
    return(
        <>
        <div className="md:basis-1/4 m-2 shadow-lg rounded-lg bg-white">
            <img src="/board.jpg" alt="banner" className="rounded-t-lg" />
            <div className="p-6">
                <h2 className="uppercase font-bold mb-2 text-fuchsia-800">Forum Overview</h2>
                <div className="grid grid-cols-2">
                <div>
                    <p className="uppercase font-bold text-gray-400">Total Posts</p>
                    <p className="font-medium">04</p>
                </div>
                <div>
                    <p className="uppercase font-bold text-gray-400">Users</p>
                    <p className="font-medium">0460</p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}