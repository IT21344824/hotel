import React from "react";
import { auth } from "@/lib/NextAuth";
import { redirect } from "next/navigation";

const profilePG = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="mt-20">
      <div>
        <main className="flex h-full flex-col items-center gap-2">
          <h1 className="text-3xl">profile </h1>
          <p className="text -lg "> {session?.user?.email}</p>
        </main>
      </div>
    </div>
  );
};

export default profilePG;
