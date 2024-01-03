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
          console.log(user);
          return user;
        } catch (error) {
          console.error("Error authenticating user:", error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
