import { allPosts } from "contentlayer/generated";

export const revalidate = 300;

const siteUrl = "https://oscar.co.tz";

export default async function sitemap() {
  const now = new Date();
  const posts = allPosts
    .filter((post) => new Date(post.publishedAt) <= now)
    .map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt || post.publishedAt,
    }));

  const routes = [
    "",
    "/about",
    "/projects",
    "/blog",
    "/blog/series/wema-kama-uhalifu",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
