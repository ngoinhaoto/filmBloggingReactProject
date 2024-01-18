import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const session = await getServerSession({ req });

  if (!session || !session.user) {
    return Response.json({
      name: "lmao",
      status: "Ur not authorised sorry",
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const result = await req.json();

  const postId = parseInt(result.postID, 10);
  const createdAt = result.date;
  const commentUserID = result.userID;
  const commentBody = result.commentContent;

  try {
    const comment = await prisma.comment.create({
      data: {
        commentBody: commentBody,
        postId: postId,
        createdAt: createdAt,
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
