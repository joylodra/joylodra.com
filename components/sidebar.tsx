"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <div className="md:h-screen md:sticky md:top-0">
      <div className="flex flex-col gap-2 md:gap-5 md:mt-5">
        <Link href="/" className="font-serif text-4xl font-extrabold p-1">
          JL
        </Link>

        <div className="flex flex-row gap-1 font-serif font-bold transition-all md:flex-col">
          <div className="flex">
            <Link
              className={`px-2 py-1 hover:opacity-100 rounded-lg ${
                pathname === "/"
                  ? "bg-neutral-100 dark:bg-[#262626] opacity-100"
                  : "opacity-50"
              }`}
              href="/"
            >
              home
            </Link>
          </div>

          <Link
            className={`px-2 py-1 hover:opacity-100 rounded-lg ${
              pathname === "/about"
                ? "bg-neutral-100 dark:bg-[#262626] opacity-100"
                : "opacity-50"
            }`}
            href="/about"
          >
            about
          </Link>

          <div className="flex">
            <Link
              className={`px-2 py-1 hover:opacity-100 rounded-lg ${
                pathname === "/blog"
                  ? "bg-neutral-100 dark:bg-[#262626] opacity-100"
                  : "opacity-50"
              }`}
              href="/blog"
            >
              blog
            </Link>
          </div>

          <div className="flex">
            <Link
              className={`px-2 py-1 hover:opacity-100 rounded-lg ${
                pathname === "/books"
                  ? "bg-neutral-100 dark:bg-[#262626] opacity-100"
                  : "opacity-50"
              }`}
              href="/books"
            >
              books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
