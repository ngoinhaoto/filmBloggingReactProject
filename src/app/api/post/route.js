import prisma from "../../../../lib/prisma";
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req, res) {
  const { searchParams } = new URL(req.url);
  const getThumbnailFromParams = searchParams.get('thumbnail');

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const formData = await req.formData();
  const values = {};
  for (const [key, value] of formData.entries()) {
    values[key] = value;
  }

  let textData = values.data;
  const parsedData = JSON.parse(textData);

  console.log(parsedData)

  const title = parsedData.title;
  const content = parsedData.content;
  const nsfw = parsedData.nsfw;
  const spoiledContent = parsedData.spoiledContent;
  const createdAt = parsedData.createdAt;
  const userId = parsedData.userId;
  const categories = parsedData.categories;
  const published = parsedData.published;
  const getThumbnail = await put(getThumbnailFromParams, formData, {
     access: 'public',
  });
  const thumbnail = getThumbnail.url;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        nsfw,
        spoiledContent,
        createdAt,
        categories,
        published,
        userId,
        thumbnail
      },
      include: {
        author: true
      }
    });

    return Response.json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    return Response.json({ message: "Internal Server Error" });
  }
}
