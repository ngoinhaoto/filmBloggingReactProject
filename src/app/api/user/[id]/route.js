import { user } from "@nextui-org/react";
import prisma from "../../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

import { getServerSession } from "next-auth/next";

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
      comment: true,
    },
  });

  const userWithoutPassword = exclude(userInfo, ["password"]);

  return Response.json({
    userOverview: userWithoutPassword,
  });
}

export async function PUT(req, { params }) {
  const session = await getServerSession({ req });

  if (!session || !session.user) {
    return Response.json({
      name: "lmao",
      status: "Ur not authorised sorry",
    });
  }

  if (req.method !== "PUT") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const userId = parseInt(params.id);

  const { displayName, location } = await req.json();

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
