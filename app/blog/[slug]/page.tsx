import type { Metadata } from "next";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

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
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    slug,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://joylodra.com/blog/${slug}`,
    },
  };
}

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage = (props: any) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
};

function Callout(props: any) {
  return (
    <div
      className="flex bg-neutral-100 dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
    >
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const components = {
  a: CustomLink,
  Image: RoundedImage,
  Callout,
};

const Post = ({ params: { slug } }: Props) => {
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose prose-neutral dark:prose-invert">
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

      <MDXContent components={{ ...components }} />
    </article>
  );
};

export default Post;
