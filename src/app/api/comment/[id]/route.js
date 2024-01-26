import prisma from "../../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req, { params }) {
  const commentId = parseInt(params.id, 10);

  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      return NextResponse.json(
        { message: "Comment not found" },
        { status: 404 }
      );
    }

    console.log(comment);

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "unknown error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      message: "Ur not authorised sorry",
    }, {status: 403});
  }

  const commentId = parseInt(params.id, 10);

  try {
    const existingComment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!existingComment) {
      return NextResponse.json(
        { message: "Comment not found" },
        { status: 404 }
      );
    }

    console.log("Comment existingcomment id", existingComment.userId);
    console.log("User id", session.user.id);
    // Check if the user is the owner of the comment
    if (existingComment.userId !== session.user.id) {
      return NextResponse.json(
        { message: "Unauthorized - User does not own the comment" },
        { status: 403 }
      );
    }

    await prisma.comment.delete({
      where: {
        id: commentId,
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
    }, {status: 403});
  }

  const commentId = parseInt(params.id, 10);
  const updatedCommentBody = await req.json();

  const updatedCommentContent = updatedCommentBody.comment;
  if (!updatedCommentContent || updatedCommentContent === "") {
    return NextResponse.json({message: "Invalid field"}, {status: 403})
  }

  try {
    const existingComment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });

    if (!existingComment) {
      return NextResponse.json(
        { message: "Comment not found" },
        { status: 404 }
      );
    }

    if (existingComment.userId !== session.user.id) {
      return NextResponse.json(
        { message: "Unauthorized - User does not own the comment" },
        { status: 403 }
      );
    }

    const updatedComment = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        commentBody: updatedCommentContent,
      },
    });

    return NextResponse.json({updatedComment}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Unknown error" }, { status: 500 });
  }
}
