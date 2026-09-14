import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import PostCard from "./components/post-card";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Makala kuhusu usalama, teknolojia, uongozi, vitabu, falsafa na maisha, pamoja na maandishi ya muda mrefu ya Oscar Olotu.",
};

export default async function Blog() {
  const now = new Date();
  const publishedPosts = allPosts.filter(
    (post) => new Date(post.publishedAt) <= now
  );

  return (
    <div className="mx-5 sm:mx-auto mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6">
      <div className="flex max-w-3xl flex-col space-y-16">
        {publishedPosts
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
      </div>
    </div>
  );
}
