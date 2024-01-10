import prisma from "../../../../../lib/prisma";

export async function GET(request, { params }) {
  const postId = parseInt(params.postId);

  try {
    const postDetail = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatar: true,
          },
        },
        comments: {
          include: {
            commentUser: {
              select: {
                id: true,
                username: true,
                displayName: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    if (!postDetail) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }

    return Response.json({ postDetail });
  } catch (error) {
    console.error("Error fetching post:", error);
    return Response.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}
