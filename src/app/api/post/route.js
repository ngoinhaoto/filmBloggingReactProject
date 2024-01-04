import prisma from "../../../../lib/prisma";
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const { searchParams } = new URL(req.url);
  const getThumbnailFromParams = searchParams.get('thumbnail');

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const body = await req.json();
  console.log(body)

  const title = body.title;
  const content = body.content;
  const nsfw = body.nsfw;
  const spoiledContent = body.spoiled;
  const createdAt = body.createdAt;
  const published = body.published;
  const categories = body.categories;
  const userId = body.userId;
  const thumbnail = await put(getThumbnailFromParams, req.body, {
    access: 'public',
  });

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        nsfw,
        spoiledContent,
        author,
        createdAt,
        categories,
        published,
        userId,
        thumbnail
      },
    });

    return res.status(201).json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
