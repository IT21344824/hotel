// * (NextAuth Configuration) - responsible for configuring the authentication provider(s) and setting up the NextAuth instance,
//    which manages user sessions and handles the authentication logic.
// * NextAuth: The main function from NextAuth.js to create an authentication handler.
// * Google and Credentials: Authentication providers.
// * PrismaAdapter: An adapter for Prisma to handle database interactions.
// * bcrypt: A library for hashing passwords.
// * db: Your database connection using Prisma.
// * saltAndHashPassword: A utility function for hashing passwords.

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
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
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Credentials({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "email",
    //       placeholder: "email@exsample.com",
    //     },
    //     password: { label: "password", type: "password" },
    //   },
    //   authorize: async (credentials) => {
    //     if (!credentials || !credentials.email || !credentials.password) {
    //       return null;
    //     }

    //     const email = credentials.email;
    //     const hash = saltAndHashPassword(credentials.password);

    //     let user = await db.user.findUnique({
    //       where: {
    //         email,
    //       },
    //     });

    //     if (!user) {
    //       user = await db.user.create({
    //         data: {
    //           email,
    //           hashedPassword: hash,
    //         },
    //       });
    //     } else {
    //       const isMatch = bcrypt.compareSync(
    //         credentials.password,
    //         user.hashedPassword
    //       );
    //       if (!isMatch) {
    //         throw new Error("Incorrect passsword");
    //       }
    //     }

    //     return user;
    //   },
    // }),
  ],
  callbacks: {
    async session({ session }) {
      //get current user from session
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      //updated currect user id
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await db();

        //chech if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        //if not , create a user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },
});
