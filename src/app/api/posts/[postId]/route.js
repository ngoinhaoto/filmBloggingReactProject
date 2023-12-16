import prisma from "../../../../../lib/prisma";

export async function GET(request, {params}) {
    const postId = parseInt(params.postId)
    let includeComments = request.nextUrl.searchParams.get("includeComments") === 'true';
    const postDetail = await prisma.post.findUnique({
        where: {
            id: postId
        },
        include: {
            author: {
                select: {
                    id: true,
                    username:true,
                    displayName: true,
                    avatar: true,
                }
            },
            comments: includeComments ? {} : false
        }
    })

    return Response.json({postDetail: postDetail})
}