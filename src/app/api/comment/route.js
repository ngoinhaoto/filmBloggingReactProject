//comment/route.js
import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req, res) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      message: "Ur not authorised sorry",
    }, {status: 403});
  }

  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, {status: 405});
  }

  const result = await req.json();

  if (result.userId) {
    return NextResponse.json({ message: "Invalid field" }, {status: 403});
  }

  if (!result.commentContent) {
    return NextResponse.json({ message: "Invalid field" }, {status: 403});
  }

  const postId = parseInt(result.postID, 10);

  try {
    const checkExistPost = await prisma.post.findUnique({
      where: {
        id: postId
      }
    })

    if (!checkExistPost) {
      return NextResponse.json({ message: "Post does not exist!" }, {status: 404});
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
  
  const commentUserID = session.user.id
  const commentBody = result.commentContent;

  try {
    const comment = await prisma.comment.create({
      data: {
        commentBody: commentBody,
        postId: postId,
        userId: commentUserID,
      },
    });

    return NextResponse.json({ comment }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {

  try {
    const comments = await prisma.comment.findMany();
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
