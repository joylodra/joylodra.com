import "../styles/globals.css";
import type { Metadata } from "next";
import Sidebar from "@components/sidebar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "joy lodra",
    template: "%s | joy lodra",
  },
  keywords: ["joy lodra", "startup founder", "personal blog"],
  description:
    "welcome to my personal blog where i mostly talk about tech, books, & self-improvement!",
  openGraph: {
    title: "Joy Lodra",
    description:
      "welcome to my personal blog where i mostly talk about tech, books, & self-improvement!",
    url: "https://joylodra.com",
    siteName: "Joy Lodra",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Joy Lodra",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "_cfe-1Y3vrQq1dNPtJgfnOPE_I7D8zwdw1b3W6h9s_A",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-[#111010]"
    >
      <body className="antialiased max-w-4xl mx-auto p-5">
        <div className="flex flex-col gap-5 md:mt-10 md:flex-row md:gap-16">
          <Sidebar />
          <main className="md:mt-5 mb-5">{children}</main>
        </div>
      </body>

      <Analytics />
    </html>
  );
};

export default RootLayout;
