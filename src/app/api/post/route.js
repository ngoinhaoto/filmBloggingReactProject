import prisma from "../../../../lib/prisma";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req, res) {
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
