import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypePrettyCode from "rehype-pretty-code";

const computedFields = {
  slug: {
    type: "string",
    resolve: (blog) => blog._raw.flattenedPath,
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true,
    },
    publishedAt: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the post",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
