import prisma from "../../../../lib/prisma";

export async function GET(request) {
    const allPosts = await prisma.post.findMany({
        include: {
            author: {
                select: {
                    id: true,
                    username:true,
                    displayName: true,
                    avatar: true,
                }
            }
        }
    });

    return Response.json({
        postsInThisBlog: allPosts
    })
}