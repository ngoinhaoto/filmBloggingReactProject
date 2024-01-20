import prisma from "../../../../../../lib/prisma";

import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  if (req.method !== "PUT") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  const userId = parseInt(params.id);

  const result = await req.json();

  const avatar = result.avatar;

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
