import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = await req.json();
  console.log(body);

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        nsfw,
        spoiled,
        author,
        createdAt,
        published,
        userId,
        thumbnail,
      },
    });

    return res.status(201).json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
