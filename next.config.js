const path = require("path");
module.exports = {
  reactStrictMode: true,
  env: {
    customKey: "customValue",
  },
  compress: true,
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
    ],
  },
};
