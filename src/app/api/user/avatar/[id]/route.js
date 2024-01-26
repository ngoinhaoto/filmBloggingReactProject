//user/avatar/[id]/route.js
import prisma from "../../../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      message: "Ur not authorised sorry",
    }, {status: 403});
  }

  if (req.method !== "PUT") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const userId = parseInt(params.id);

  if (userId !== session.user.id) {
    return NextResponse.json(
      { message: "You don't own this account" },
      { status: 403 }
    );
  }
  const result = await req.json();

  const avatar = result.avatar;
  if (!avatar || avatar === "") {
    return NextResponse.json(
      { message: "Updated avatar cannot be empty." },
      { status: 403 }
    );
  }

  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!currentUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar: avatar,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log("Error changing avatar: ", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);

    if (!session || !session.user) {
    return NextResponse.json({
      message: "Ur not authorised sorry",
    }, {status: 403});
  }

  if (req.method !== "DELETE") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const userId = parseInt(params.id);

  if (userId !== session.user.id) {
    return NextResponse.json(
      { message: "You don't own this account" },
      { status: 403 }
    );
  }

  // deleting in this case is simply just resets to the default avatar
  const avatar = "https://i.imgur.com/UEO3Ul7.jpeg";

  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!currentUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar: avatar,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log("Error deleting avatar: ", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
