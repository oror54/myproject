const path = require("path");

module.exports = {
  images: {
    formats: ["image/webp"],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ["url-loader"],
      }
    );

    // Important: return the modified config
    return config;
  },
};
