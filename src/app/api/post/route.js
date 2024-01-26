//post/route.js
import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      message: "Ur not authorised sorry",
    }, {status: 403});
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const result = await req.json();

  if (result.userId) {
    return Response.json({
      name: "lmao",
      status: "Invalid field",
    });
  }

  for (const field in result) {
    if (result.hasOwnProperty(field) && typeof result[field] === "string" && result[field].trim() === "") {
      return Response.json({
        name: "lmao",
        status: "Invalid field: Empty string not allowed",
      });
    }
  }

  const userId = session.user.id;

  console.log("RESULT: ", result);

  const {
    title,
    content,
    categories,
    nsfw,
    spoiled,
    thumbnail,
  } = result;

  if (categories && (categories.length === 0 || categories.some(cat => typeof cat === "string" && cat.trim() === ""))) {
    return Response.json({
      name: "lmao",
      status: "Invalid field: 'categories' array cannot be empty, and its elements cannot be empty strings",
    });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        nsfw,
        spoiledContent: spoiled,
        categories,
        userId: userId,
        thumbnail,
      },
    });

    return Response.json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    return Response.json({ message: "Internal Server Error" });
  }
}
