// * (NextAuth Configuration) - responsible for configuring the authentication provider(s) and setting up the NextAuth instance,
//    which manages user sessions and handles the authentication logic.
// * NextAuth: The main function from NextAuth.js to create an authentication handler.
// * Google and Credentials: Authentication providers.
// * PrismaAdapter: An adapter for Prisma to handle database interactions.
// * bcrypt: A library for hashing passwords.
// * db: Your database connection using Prisma.
// * saltAndHashPassword: A utility function for hashing passwords.

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { saltAndHashPassword } from "@/utils/helper";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          const hashedPassword = await saltAndHashPassword(
            credentials.password,
          );
          const newUser = await db.user.create({
            data: {
              email: credentials.email,
              hashedPassword,
            },
          });
          return newUser;
        }

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        );
        if (!isMatch) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
        session.email = token.email;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  debug: true,
});
