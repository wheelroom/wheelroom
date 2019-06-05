packageJson = require('./package.json')

module.exports = {
  // __experimentalThemes: [
  //   {
  //     resolve: 'gatsby-theme-carbon',
  //     options: {
  //       additionalFontWeights: ['200', '200i'],
  //     },
  //   },
  // ],
  __experimentalThemes: [
    {
      options: {
        appTheme: require('./src/theme.json'),
        defaultLocale: 'nl',
        models: [
          {
            name: 'articleSection',
            modelPath: '/lib/components/article-section/model.js',
            type: 'section',
          },
          {
            name: 'globalsPart',
            modelPath: '/lib/components/globals-part/model.js',
            queryPath: '/lib/components/globals-part/query.js',
            type: 'global',
          },
          {
            name: 'articleContent',
            modelPath: '/lib/components/article-content/model.js',
            queryPath: '/lib/components/article-content/query.js',
            type: 'subPage',
          },
          {
            name: 'page',
            modelPath: '/lib/page/model.js',
            queryPath: '/lib/page/query.js',
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
