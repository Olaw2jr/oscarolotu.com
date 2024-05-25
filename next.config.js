const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
      "user-images.githubusercontent.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "blog.oscarolotu.com",
          },
        ],
        destination: "https://oscarolotu.com/blog",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "blog.oscarolotu.com",
          },
        ],
        destination: "https://oscarolotu.com/blog/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
