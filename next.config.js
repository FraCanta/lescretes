/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const { i18n } = require("./next-18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  postcss: {
    plugins: [],
  },
  i18n: {
    locales: ["it", "en", "fr", "de", "ko", "jp", "ru", "zh"],
    defaultLocale: "it",
    localeDetection: true,
  },
  async redirects() {
    return [
      {
        source: "/wp-content/:path*", // Cattura tutti i percorsi che iniziano con /wp-content/
        destination: "https://www.lescretes.it/", // Reindirizza alla homepage
        permanent: true, // 301 Redirect
      },
      {
        source: "/en/our-wines/:path*", // Cattura tutti i percorsi che iniziano con /wp-content/
        destination: "https://www.lescretes.it/en/i-vini", // Reindirizza alla homepage
        permanent: true, // 301 Redirect
      },
      {
        source: "/azienda-les-cretes/:path*", // Cattura tutti i percorsi che iniziano con /wp-content/
        destination: "https://www.lescretes.it/la-famiglia-charrere", // Reindirizza alla homepage
        permanent: true, // 301 Redirect
      },
      {
        source: "/les-cretes-vini-di-montagna-dal-1800/:path*", // Cattura tutti i percorsi che iniziano con /wp-content/
        destination: "https://www.lescretes.it/", // Reindirizza alla homepage
        permanent: true, // 301 Redirect
      },
    ];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["www.lescretes.it"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
};

const ContentSecurityPolicy = `
  default-src 'self' https://region1.google-analytics.com/ https://api.iconify.design/ https://cpl.iubenda.com/ https://idb.iubenda.com/ https://use.typekit.net/;
  script-src 'self' https://www.googletagmanager.com/ https://static.elfsight.com/ https://p.typekit.net/ http://cdn.iubenda.com/ https://cs.iubenda.com/ https://fonts.googleapis.com/ 'unsafe-inline' 'unsafe-eval';
  child-src 'self';
  style-src 'self' https://p.typekit.net/ https://fonts.googleapis.com/ https://use.typekit.net/ https://cdn.iubenda.com/ 'unsafe-inline' data:;
  font-src 'self' https://use.typekit.net/ https://fonts.gstatic.com/ 'unsafe-inline' data:;
  img-src 'self' data: blob:;
`;

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

module.exports = withPlugins([
  nextConfig,
  {
    i18n: {
      locales: ["it", "en", "fr", "de", "ko", "jp", "ru", "zh"],
      defaultLocale: "it",
      localeDetection: true,
    },
  },
  {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: "/:path*",
          headers: securityHeaders,
        },
      ];
    },
  },
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
