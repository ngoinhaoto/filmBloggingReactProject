import prisma from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 200 }
    );
  }

  const result = await req.json();
  console.log("RESULT: ", result);
  const { username, password, displayName, location } = result;

  const avatar = "https://i.imgur.com/UEO3Ul7.jpeg";

  try {
    // Check if the username already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Username is already taken" },
        { status: 400 }
      );
    }

    const newAccount = await prisma.user.create({
      data: {
        username,
        password,
        displayName,
        location,
        avatar,
      },
    });

    return Response.json({ newAccount }, { status: 201 });
  } catch (error) {
    console.error("Error creating account:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
