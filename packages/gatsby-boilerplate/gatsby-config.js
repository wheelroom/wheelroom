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
            path: '/dist/components/article-section/model.js',
            type: 'section',
          },
          {
            name: 'globals-part',
            path: '/dist/components/globals-part/model.js',
            query: '/dist/components/globals-part/query.js',
            type: 'global',
          },
          {
            name: 'article-content',
            path: '/dist/components/article-content/model.js',
            query: '/dist/components/article-content/model.js',
            type: 'subPage',
          },
          {
            name: 'page',
            path: '/dist/lib/page/model.js',
            query: '/dist/lib/page/query.js',
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
