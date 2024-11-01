import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontSerif } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "NoProcrast",
    template: `%s - NoProcrast`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "max-h-screen overflow-hidden bg-background font-sans transition-all duration-500",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <ScrollShadow className="relative h-full w-screen">
              <main className="relative h-full w-screen">{children}</main>
            </ScrollShadow>
          </div>
        </Providers>
      </body>
    </html>
  );
}
