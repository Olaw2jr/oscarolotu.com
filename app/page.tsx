/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {
  LinkedInIcon,
  TwitterIcon,
  GitHubIcon,
} from "./components/icons/social";

export default function Home() {
  return (
    <div className="mx-5 sm:mx-0 flex flex-col space-y-5 max-w-2xl">
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        width={80}
        height={80}
        className="rounded-full"
      />
      <h1 className="text-5xl font-bold tracking-tighter">
        Security Engineer and Developer.
      </h1>
      <p className="mt-6 text-base text-zinc-600">
        Hey! I'm Oscar, a Senior Security Engineer at{" "}
        <a
          href="https://www.tigo.co.tz/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Axian Telcom (Tigo Zantel)
        </a>
        , where I help safeguard the largest telco.
      </p>
      <p className="mt-6 text-base text-zinc-600">
      In my free time, I dive into the depths of code, constantly exploring new languages, frameworks, and ideas.{" "}
      </p>
      <div className="mt-6 flex gap-6">
        <a
          href="https://twitter.com/Olaw2jr"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://github.com/Olaw2jr"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://linkedin.com/in/oscarolotu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
      </div>
    </div>
  );
}
