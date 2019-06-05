packageJson = require('./package.json')

module.exports = {
  __experimentalThemes: [
    {
      options: {
        appTheme: require('./src/theme.json'),
        defaultLocale: 'nl',
        models: [
          {
            name: 'article-section',
            modelPath: '/dist/components/article-section/model.js',
            type: 'section',
          },
          {
            name: 'globals-part',
            modelPath: '/dist/components/globals-part/model.js',
            queryPath: '/dist/components/globals-part/query.js',
            type: 'global',
          },
          {
            name: 'article-content',
            modelPath: '/dist/components/article-content/model.js',
            queryPath: '/dist/components/article-content/model.js',
            type: 'subPage',
          },
          {
            name: 'page',
            modelPath: '/dist/page/model.js',
            queryPath: '/dist/page/query.js',
            type: 'page',
          },
        ], // pageTemplate: path.resolve('src/page-template.tsx'),
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
