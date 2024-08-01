module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["it", "en", "fr", "de", "ko", "jp", "ru", "zh"],
    defaultLocale: "it",
    localeDetection: true,
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
};
