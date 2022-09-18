/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "build",
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  allowFutureImage: true,
  async redirects() {
    return [
      {
        source: "/meetme",
        destination: "https://calendly.com/nishantjha/25min",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
