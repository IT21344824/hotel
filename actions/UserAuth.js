"use server";
// * (Authentication Logic) - functions that handle the logic for user authentication, such as signing up, logging in, and logging out.
// * signIn, signOut: Functions from the NextAuth.js library to log in and log out users.
// * db: Database connection for user data retrieval.
// * AuthError: An error type from NextAuth.js.
// * bcrypt: For password hashing and comparison.

import { signIn, signOut } from "@/lib/NextAuth";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

const getUserByEmail = async (email) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const login = async (provider) => {
  try {
    await signIn(provider, { redirectTo: "/" });
    revalidatePath("/");
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logout = async () => {
  try {
    await signOut({ redirectTo: "/" });
    revalidatePath("/");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export const signupWithCreds = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    console.error("User email is already taken.");
    return { error: "User email is already taken." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      role: "ADMIN",
      redirectTo: "/",
    });
  } catch (error) {
    console.error("Sign-up failed:", error);
    return { error: "Something went wrong during sign-up." };
  }

  revalidatePath("/");
};

export const loginWithCreds = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    console.error("Email and password are required.");
    return { error: "Email and password are required." };
  }

  const user = await getUserByEmail(email);
  if (!user || !user.hashedPassword) {
    console.error("User not found.");
    return { error: "User not found." };
  }

  const isMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!isMatch) {
    console.error("Incorrect password.");
    return { error: "Incorrect password." };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "Invalid credentials or login failed." };
  }

  revalidatePath("/");
};
