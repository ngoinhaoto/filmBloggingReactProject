import prisma from "../../../../../../lib/prisma";

import bcrypt from "bcrypt";

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

  const currentPassword = result.currentPassword;
  const newPassword = result.newPassword;

  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!currentUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // check if current password is correct
    const isCurrentPasswordCorrect = await bcrypt.compare(
      currentPassword,
      currentUser.password
    );

    if (!isCurrentPasswordCorrect) {
      return NextResponse.json(
        { message: "Current password is incorrect" },
        { status: 400 }
      );
    }

    // hash the new password using bcrypt
    const saltRounds = 10;
    const newHashedPassword = await bcrypt.hash(newPassword, saltRounds);

    //update password
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: newHashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Password changed successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error changing password:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
