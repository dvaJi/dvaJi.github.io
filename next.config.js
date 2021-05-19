const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/dvaJi/dvaJi.github.io/gh-pages/"
    : "",
  future: {
    webpack5: true,
  },
};
