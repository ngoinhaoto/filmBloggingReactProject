import prisma from "../../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

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

          orderBy: {
            createdAt: 'desc'
          }
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

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return Response.json({
      name: "lmao",
      status: "Ur not authorised sorry",
    });
  }

  const postId = parseInt(params.postId, 10);

  try {
    const existingPostId = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!existingPostId) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }

    console.log("Post author id", existingPostId.userId);
    console.log("User id", session.user.id);
    // Check if the user is the owner of the comment
    if (existingPostId.userId !== session.user.id) {
      return NextResponse.json(
        { message: "Unauthorized - User does not own this post" },
        { status: 403 }
      );
    }

    await prisma.post.delete({
      where: {
        id: postId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}