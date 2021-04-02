module.exports = {
  future: {
    webpack5: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Compile external modules
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.tsx?|\.ts?$/,
      use: [defaultLoaders.babel],
    })
    return config
  },
}
