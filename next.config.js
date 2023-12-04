/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([
  nextConfig,

  {
    i18n: {
      locales: ["it", "en", "fr", "de", "ko", "jp", "ru", "zh"],
      defaultLocale: "it",
      localeDetection: true,
    },
  },
  // {
  //   async headers() {
  //     return [
  //       {
  //         // Apply these headers to all routes in your application.
  //         source: "/:path*",
  //         headers: securityHeaders,
  //       },
  //     ];
  //   },
  // },
  {
    images: {
      formats: ["image/avif", "image/webp"],
      domains: ["www.lescretes.it"],

      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
      unoptimized: true,
    },
  },

  // withBundleAnalyzer,
]);
