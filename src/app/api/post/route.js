import prisma from "../../../../lib/prisma";
import { getServerSession } from "next-auth/next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req, res) {
  const session = await getServerSession({ req });

  if (!session || !session.user) {
    return Response.json({
      name: "lmao",
      status: "Ur not authorised sorry",
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const result = await req.json();

  console.log("RESULT: ", result);

  const {
    title,
    content,
    categories,
    nsfw,
    spoiledContent,
    published,
    userId,
    thumbnail,
    createdAt,
  } = result;
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
        thumbnail,
      },
      include: {
        author: true,
      },
    });

    return Response.json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    return Response.json({ message: "Internal Server Error" });
  }
}
