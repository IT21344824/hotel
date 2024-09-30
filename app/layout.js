import { ThemeProvider } from "@/components/theme-provider";

import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Nav from "@/components/global/nav";
import Footer from "@/components/global/footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/NextAuth";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Luxury Hotel",
  description: "Luxury Hotel demo",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
