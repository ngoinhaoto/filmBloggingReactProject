import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import prisma from "../../../../../lib/prisma";

export const authOptions = {
  secrets: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "stuffs" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              username: credentials.username,
              password: credentials.password,
            },
          });
          return {
            id: user.id,
            username: user.username,
            displayName: user.displayName,
            avatar: user.avatar,
            createdAt: user.createdAt,
            location: user.location,
            post: user.post,
            comment: user.comment,
          };
        } catch (error) {
          console.error("Error authenticating user:", error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
    // session lasts 30 days
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },

  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
