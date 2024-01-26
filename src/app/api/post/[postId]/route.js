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
            location: true,
            createdAt: true
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
    return NextResponse.json({
      message: "Ur not authorised sorry",
    }, { status: 403 });
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

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      message: "Ur not authorised sorry",
    }, { status: 403 });
  }

  const result = await req.json();
  if (result.userId) {
    return NextResponse.json({
      message: "Invalid field.",
    }, { status: 403 });
  }

  for (const field in result) {
    if (result.hasOwnProperty(field) && typeof result[field] === "string" && result[field].trim() === "") {
      return NextResponse.json({
        message: "Invalid field: Empty string not allowed.",
      }, {status: 403});
    }
  }

  const postId = parseInt(params.postId)

  console.log("RESULT: ", result);

  const {
    title,
    content,
    categories,
    nsfw,
    spoiled,
    thumbnail
  } = result;

  if (categories && (categories.length === 0 || categories.some(cat => typeof cat === "string" && cat.trim() === ""))) {
    return NextResponse.json({
      message: "Invalid field: categories must be in array and cannot contain empty object's string.",
    }, {status: 403});
  }

  try {
    const checkUserId = await prisma.post.findUnique({
      where: {
        id: postId
      }
    })

    if (!checkUserId) {
      return NextResponse.json({ message: "Post does not exist." }, { status: 404 })
    }

    if (checkUserId.userId !== session.user.id) {
      return NextResponse.json({ message: "You do not own this post" }, { status: 403 })
    }

    const post = await prisma.post.update({
      where: {
        id: postId
      },
      data: {
        title,
        content,
        nsfw,
        spoiledContent: spoiled,
        categories,
        thumbnail,
      }
    });

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ message: "Internal Server Error" });
  }
}
