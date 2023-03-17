// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var computedFields = {
  slug: {
    type: "string",
    resolve: (blog) => blog._raw.flattenedPath
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image ? `https://joylodra.com${doc.image}` : `https://joylodra.com/api/og?title=${doc.title}`,
      url: `https://joylodra.com/blog/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Joy Lodra"
      }
    })
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    publishedAt: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true
    },
    image: {
      type: "string",
      description: "The image of the post"
    },
    keywords: {
      type: "string",
      description: "The keywords of the post"
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
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
            className: ["anchor"]
          }
        }
      ]
    ]
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3G3YMC5K.mjs.map
