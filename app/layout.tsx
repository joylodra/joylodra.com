import "../styles/globals.css";
import type { Metadata } from "next";
import Sidebar from "../components/sidebar";

export const metadata: Metadata = {
  title: "joy lodra",
  description:
    "welcome to my personal blog where i mostly talk about tech, books, & self-improvement!",
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
          <main className="md:mt-5">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
