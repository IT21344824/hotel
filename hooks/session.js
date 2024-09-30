// import { auth } from "@/lib/NextAuth";  - use it in server side
import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();
  //   const { data: session, status } = auth(); - use it in server side

  return {
    session,
    isLoading: status === "loading",
    isAuthenticated: !!session,
  };
};
