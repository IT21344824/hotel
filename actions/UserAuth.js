"use server";
// * (Authentication Logic) - functions that handle the logic for user authentication, such as signing up, logging in, and logging out.
// * signIn, signOut: Functions from the NextAuth.js library to log in and log out users.
// * db: Database connection for user data retrieval.
// * AuthError: An error type from NextAuth.js.
// * bcrypt: For password hashing and comparison.

import { signIn, signOut } from "@/lib/NextAuth";
import { db } from "@/lib/db";
import { error } from "console";
import { AuthError } from "next-auth";
import email from "next-auth/providers/email";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

const getUserByEmail = async (email) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (provider) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export const signupWithCreds = async (formData) => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
    role: "ADMIN",
    redirectTo: "/",
  };

  const existingUser = await getUserByEmail(formData.get("email"));
  // console.log(existingUser);
  if (existingUser) {
    console.log("User email is taken taken.");
    return { error: "User email is taken taken." };
  }

  try {
    await signIn("credentials", rawFormData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid creadential" };
        default:
          return { error: "Somthing went wrong" };
      }
    }
    throw error;
  }
  revalidatePath("/");
};

export const loginWithCreds = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    console.log("Email and password are required.");
    return { error: "Email and password are required." };
  }

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.hashedPassword) {
    console.log("User not found.");
    return { error: "User not found." };
  }

  const passwordMatch = bcrypt.compareSync(
    password,
    existingUser.hashedPassword
  );
  if (!passwordMatch) {
    console.log("Incorrect password.");
    return { error: "Incorrect password." };
  }

  console.log(" password.", password);
  console.log("hashed password.", passwordMatch);

  // Use NextAuth's signIn function to log the user in
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/", // Set redirect to false to handle it manually
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid creadential" };
        default:
          return { error: "Somthing went wrong" };
      }
    }
    throw error;
  }
  revalidatePath("/");
};
