import type { Metadata } from "next";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import Mdx from "components/mdx";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
    keywords,
  } = post;

  const ogImage = image
    ? `https://joylodra.com${image}`
    : `https://joylodra.com/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://joylodra.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    keywords: keywords,
  };
}

const Post = ({ params: { slug } }: Props) => {
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>

      <div>
        <h1 className="text-4xl font-serif tracking-tight mb-2">
          {post.title}
        </h1>
        <p className="opacity-50 text-sm mt-0">
          by {post.author} //{" "}
          <time dateTime={post.publishedAt}>
            {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
          </time>
        </p>
      </div>

      <Mdx code={post.body.code} />

      <hr />

      <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
        <h3 className="m-0">follow my socials 📱</h3>
        <div className="flex flex-col gap-3 md:flex-row mt-1">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
            href="https://twitter.com/joylodra"
          >
            <BsArrowUpRight />
            twitter
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
            href="https://instagram.com/joylodra"
          >
            <BsArrowUpRight />
            instagram
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
