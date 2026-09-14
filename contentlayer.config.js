import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const siteUrl = "https://oscar.co.tz";

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  images: {
    type: "array",
    resolve: (doc) => {
      return doc.body.raw.match(
        /(?<=<BlurImage[^>]*\bsrc=")[^"]+(?="[^>]*\/>)/g
      );
    },
  },
  tweetIds: {
    type: "array",
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(
        /<StaticTweet\sid="[0-9]+"\s\/>/g
      );
      return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
    },
  },
  githubRepos: {
    type: "array",
    resolve: (doc) => {
      return doc.body.raw.match(
        /(?<=<GithubRepo[^>]*\burl=")[^"]+(?="[^>]*\/>)/g
      );
    },
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.updatedAt || doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `${siteUrl}${doc.image}`
        : `${siteUrl}/api/og?title=${encodeURIComponent(doc.title)}`,
      url: `${siteUrl}/blog/${doc._raw.flattenedPath}`,
      inLanguage: doc.language || "en",
      keywords: doc.keywords?.join(", "),
      articleSection: doc.series || "Blog",
      author: {
        "@type": "Person",
        name: "Oscar Olotu",
        url: siteUrl,
      },
    }),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string" },
    summary: { type: "string", required: true },
    image: { type: "string" },
    language: { type: "string" },
    series: { type: "string" },
    seriesOrder: { type: "number" },
    keywords: { type: "list", of: { type: "string" } },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
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
