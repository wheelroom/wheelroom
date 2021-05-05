module.exports = {
  future: {
    webpack5: true,
  },
  // Compile external modules
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.+(tsx|ts)?$/,
      use: [defaultLoaders.babel],
    })
    return config
  },
}
