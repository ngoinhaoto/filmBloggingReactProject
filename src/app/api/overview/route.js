import prisma from "../../../../lib/prisma";

export async function GET(request, {searchParams}) {
  // const sortByDate = request.nextUrl.searchParams.get("sortByDate") || desc;
  const allUsers = await prisma.user.findMany();
  const allPosts = await prisma.post.findMany({
    /*orderBy: [
      {
        createdAt: sortByDate,
      },
    ],*/
    include: {
      author: {
        select: {
          id: true,
          username: true,
          displayName: true,
          avatar: true,
        },
      },
    },
  });

  // const pageNumber = parseInt(request.nextUrl.searchParams.get("page") || 1);
  // const itemsPerPage = parseInt(request.nextUrl.searchParams.get("blogsPerPage") || 5);
  // console.log(`pageNumber: ${pageNumber}, itemsPerPage: ${itemsPerPage}`);

  // // Calculate the start and end index
  // const startIndex = (pageNumber - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`);
  // Get data for this page
  //   const postsInThisPage = allPosts.slice(startIndex, endIndex);

  // delay 5 seconds
  //   await new Promise((resolve) => setTimeout(resolve, 100));

  return Response.json({
    totalPostNumber: allPosts.length,
    totalUserNumber: allUsers.length,
    allPosts: allPosts,

    // postsInThisBlog: postsInThisPage,
  });
}
