import type { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Wema Kama Uhalifu: Dostoevsky na Dunia Inayoadhibu Huruma",
  description:
    "Mfululizo wa makala 30 kwa Kiswahili kuhusu Dostoevsky, wema, huruma, haki, mipaka, msamaha, mamlaka na gharama ya kubaki binadamu.",
  alternates: {
    canonical: "https://oscar.co.tz/blog/series/wema-kama-uhalifu",
  },
  openGraph: {
    title: "Wema Kama Uhalifu",
    description:
      "Mfululizo wa makala 30 kuhusu Dostoevsky na swali la kwa nini wema wakati mwingine huadhibiwa na jamii.",
    type: "website",
    locale: "sw_TZ",
    url: "https://oscar.co.tz/blog/series/wema-kama-uhalifu",
  },
};

export default function WemaKamaUhalifuSeries() {
  const now = new Date();
  const posts = allPosts
    .filter(
      (post) =>
        post.series === "Wema Kama Uhalifu" &&
        new Date(post.publishedAt) <= now
    )
    .sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0));

  return (
    <main className="mx-5 sm:mx-auto mt-16 sm:mt-20 max-w-3xl" lang="sw">
      <header className="mb-12">
        <p className="text-sm font-medium text-zinc-500">Mfululizo wa makala 30</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Wema Kama Uhalifu
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600">
          Dostoevsky aliandika kuhusu watu wanaojaribu kubaki binadamu katika dunia yenye deni,
          aibu, tamaa, mamlaka, mateso na kisasi. Mfululizo huu unauliza swali moja kwa njia
          tofauti: nini kinatokea pale wema unapokuwa na gharama?
        </p>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Makala mbili huchapishwa kila siku hadi sehemu zote 30 zikamilike. Kauli kwamba
          “wema ni uhalifu katika dunia hii” inatumika hapa kama hoja ya kujadili, si kama
          nukuu iliyothibitishwa ya Dostoevsky.
        </p>
      </header>

      <ol className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-zinc-200 pt-6">
            <p className="text-sm text-zinc-500">
              Sehemu ya {post.seriesOrder} · {formatDate(post.publishedAt)}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              <Link href={`/blog/${post.slug}`} className="hover:text-zinc-600">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 leading-7 text-zinc-600">{post.summary}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
