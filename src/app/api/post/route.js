import prisma from "../../../../lib/prisma";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {
    title,
    content,
    categories,
    nsfw,
    spoiled,
    author,
    createdAt,
    published,
    userId,
  } = req.body;

  console.log(req.body);

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
      },
    });

    res.status(201).json({ post });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
