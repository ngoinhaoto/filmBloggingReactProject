import Navbar from "../components/navbar/NavbarSignIn.js";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider.js";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";
// import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieMuncher",
  description: "Made by wither and luna",
};

export default function RootLayout({ children }) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Providers>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            {children}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
