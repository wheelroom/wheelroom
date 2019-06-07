packageJson = require('./package.json')
path = require('path')

module.exports = {
  __experimentalThemes: [
    {
      options: {
        appTheme: require('./src/theme.json'),
        defaultLocale: 'nl',
        models: [
          {
            name: 'articleSection',
            modelPath: '/components/article-section/model.js',
            type: 'section',
          },
          {
            name: 'globalsPart',
            modelPath: '/components/globals-part/model.js',
            queryPath: '/components/globals-part/query.js',
            type: 'global',
          },
          {
            name: 'articleContent',
            modelPath: '/components/article-content/model.js',
            queryPath: '/components/article-content/query.js',
            type: 'subPage',
          },
          {
            name: 'page',
            modelPath: '/components/page/model.js',
            queryPath: '/components/page/query.js',
            type: 'page',
          },
        ],
        pageTemplate: path.resolve('./src/page-template.tsx'),
      },
      resolve: `gatsby-theme-wheelroom`,
    },
  ],
  plugins: [
    {
      options: {
        google: {
          families: ['Work+Sans:300'],
        },
      },
      resolve: 'gatsby-plugin-web-font-loader',
    },
  ],
  siteMetadata: {
    siteVersion: packageJson.version,
  },
}
