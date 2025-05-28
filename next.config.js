/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const ContentSecurityPolicy = `
  default-src 'self' https://service-reviews-ultimate.elfsight.com/ https://core.service.elfsight.com/ https://region1.google-analytics.com/ https://api.iconify.design/ https://cpl.iubenda.com/ https://idb.iubenda.com/ https://use.typekit.net/;
  script-src 'self' https://core.service.elfsight.com/ https://universe-static.elfsightcdn.com/ http://embeds.iubenda.com/ https://www.googletagmanager.com/ https://static.elfsight.com/ https://p.typekit.net/ http://cdn.iubenda.com/ https://cs.iubenda.com/ https://fonts.googleapis.com/ 'unsafe-inline' 'unsafe-eval';
  child-src 'self' https://www.iubenda.com/ http://embeds.iubenda.com/;
  style-src 'self' https://p.typekit.net/ https://fonts.googleapis.com/ https://use.typekit.net/ https://cdn.iubenda.com/ 'unsafe-inline' data:;
  font-src 'self' https://use.typekit.net/ https://fonts.gstatic.com/ 'unsafe-inline' data:;
  img-src 'self' https://b.tile.openstreetmap.org/ https://c.tile.openstreetmap.org/ https://a.tile.openstreetmap.org/ https://cdnjs.cloudflare.com/ https://lh3.googleusercontent.com/ data: blob:;
  media-src 'self' data:audio/mpeg;
`;

const securityHeaders = [
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
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
        source: "/wp-content/:path*",
        destination: "https://www.lescretes.it/",
        permanent: true,
      },
      {
        source: "/en/our-wines/",
        destination: "https://www.lescretes.it/en/i-vini",
        permanent: true,
      },
      {
        source: "/en/our-wines/:path*",
        destination: "https://www.lescretes.it/en/i-vini",
        permanent: true,
      },
      {
        source: "/fr/nos-vins/",
        destination: "https://www.lescretes.it/fr/i-vini",
        permanent: true,
      },
      {
        source: "/azienda-les-cretes/:path*",
        destination: "https://www.lescretes.it/la-famiglia-charrere",
        permanent: true,
      },
      {
        source: "/les-cretes-vini-di-montagna-dal-1800/:path*",
        destination: "https://www.lescretes.it/",
        permanent: true,
      },
      {
        source: "/vini",
        destination: "https://www.lescretes.it/i-vini",
        permanent: true,
      },
      {
        source: "/vini-lestate-by-doctorwine-2022/:path*",
        destination: "https://www.lescretes.it/",
        permanent: true,
      },
      {
        source: "/vignernonscourmayeur-sabato-4-aprile-2015/:path*",
        destination: "https://www.lescretes.it/",
        permanent: true,
      },
      {
        source: "/valle-daosta-le-gelate-aprile-secondo-les-cr/:path*",
        destination: "https://www.lescretes.it/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
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

module.exports = withPlugins([], nextConfig);
