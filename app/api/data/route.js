import { auth } from "@/lib/NextAuth";
import { NextResponse } from "next/server";

export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not Authenticeted" }, { status: 401 });
});
