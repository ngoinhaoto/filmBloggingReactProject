import prisma from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";

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
    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    // Check if the username is longer than 50 characters
    if (username.length > 50 || username.length < 5) {
      return NextResponse.json(
        { message: "Username length should be between 5 and 50 characters" },
        { status: 400 }
      );
    }

    if (displayName.length === 0) {
      return NextResponse.json(
        {
          message: "Display Name must not be empty",
        },
        { status: 400 }
      );
    }

    if (location.length === 0) {
      return NextResponse.json(
        {
          message: "Location must not be empty",
        },
        { status: 400 }
      );
    }

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

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newAccount = await prisma.user.create({
      data: {
        username,
        password: hashedPassword, // Store the hashed password in the database
        displayName,
        location,
        avatar,
      },
    });

    return NextResponse.json({ newAccount }, { status: 201 });
  } catch (error) {
    console.error("Error creating account:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
