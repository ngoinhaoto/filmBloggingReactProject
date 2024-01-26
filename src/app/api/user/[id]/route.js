//user/[id]/route.js
import { user } from "@nextui-org/react";
import prisma from "../../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(request, { params }) {
  function exclude(user, keys) {
    return Object.fromEntries(
      Object.entries(user).filter(([key]) => !keys.includes(key))
    );
  }

  const userId = parseInt(params.id);
  const userInfo = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      post: true,
      comment: {
        include: {
          Post: {
            include: {
              author: {
                select: {
                  id: true,
                  displayName: true,
                  username: true,
                  avatar: true,
                  location: true,
                  createdAt: true
                }
              },
            },
          },
        },
      },
    },
  });

  const userWithoutPassword = exclude(userInfo, ["password"]);

  return Response.json({
    userOverview: userWithoutPassword,
  });
}

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
      { message: "You do not own this account or this account does not exist." },
      { status: 403 }
    );
  }

  const { displayName, location } = await req.json();
  if (displayName === "" || location === "") {
    return NextResponse.json({ message: "Not Allowed - Empty string not allowed" }, { status: 403 });
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { displayName, location },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}
