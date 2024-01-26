import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import prisma from "../../../../../lib/prisma";
import bcrypt from "bcrypt";

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
            },
            include: {
              post: true,
            }
          });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!passwordMatch) {
            return null;
          }

          return {
            id: user.id,
            username: user.username,
            displayName: user.displayName,
            avatar: user.avatar,
            createdAt: user.createdAt,
            location: user.location,
            post: user.post.length
          };
        } catch (error) {
          console.error("Error authenticating user:", error);
          return null;
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
    async session({ session, token, user }) {
      session.user = token.user;
      return session;
    },

    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        if (session?.displayName) {
          token.user.displayName = session.displayName;
        }
        if (session?.location) {
          token.user.location = session.location;
        }

        if (session?.avatar) {
          token.user.avatar = session.avatar;
        }
      }

      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
