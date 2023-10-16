/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
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
        source: "/hangout",
        destination: "https://calendly.com/nishantjha/60min",
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
      {
        source: "/essays/llms_will_eat_you",
        destination: "/essays/squeeze",
        permanent: true,
        basePath: false,
      },
      {
        source: "/essays/worldeater",
        destination: "/essays/tower",
        permanent: true,
        basePath: false,
      },
      {
        source: "/essays/tower_of_abstraction",
        destination: "/essays/tower",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
