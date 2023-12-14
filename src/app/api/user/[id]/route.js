import prisma from "../../../../../lib/prisma";

export async function GET(request, { params }) {
    function exclude(user, keys) {
        return Object.fromEntries(
          Object.entries(user).filter(([key]) => !keys.includes(key))
        );
    }

    const userId  = parseInt(params.id)
    const userInfo = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            post: true,
            comment: true,
        },
    })

    const userWithoutPassword = exclude(userInfo, ['password'])

    return Response.json({
        userOverview: userWithoutPassword
    })
}
  