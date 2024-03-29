//user/password/[id]/route.js
import prisma from "../../../../../../lib/prisma";

import bcrypt from "bcrypt";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]/route";

import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      {
        message: "Ur not authorised sorry",
      },
      { status: 403 }
    );
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
      { message: "You dont know this account" },
      { status: 403 }
    );
  }

  const result = await req.json();

  const currentPassword = result.currentPassword;
  const newPassword = result.newPassword;

  if (!newPassword || newPassword === "") {
    return NextResponse.json(
      { message: "Password cannot be empty." },
      { status: 400 }
    );
  }

  if (newPassword === currentPassword) {
    return NextResponse.json(
      { message: "New password must not be the same with current password." },
      { status: 400 }
    );
  }
  if (newPassword.length < 8) {
    return NextResponse.json(
      { message: "New password must be at least 8 characters" },
      { status: 400 }
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
