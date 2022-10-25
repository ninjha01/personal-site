/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: "/bookme",
        destination: "https://calendly.com/nishantjha/25min",
        permanent: false,
        basePath: false,
      },
      {
        source: "/hireme",
        destination: "/",
        permanent: true,
        basePath: false,
      },
      {
        source: "/cancerdev",
        destination: "/",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
