import { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";

export const metadata: Metadata = {
  title: "blog",
  description: "i talk about tech, creator economy, & self-improvement",
  keywords: ["tech", "books", "self-improvement"],
};

const Blog = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-serif tracking-tighter font-bold">
        blog ✍️
      </h1>

      {allBlogs
        .sort((a, b) => {
          return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col gap-3"
            href={`/blog/${post.slug}`}
          >
            <div>
              <h3 className="text-bold font-bold hover:underline">
                {post.title}
              </h3>
              <p className="opacity-50">
                {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Blog;
