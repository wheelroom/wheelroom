packageJson = require('./package.json')
path = require('path')

module.exports = {
  __experimentalThemes: [
    {
      options: {
        appTheme: require('./src/theme.json'),
        defaultLocale: 'nl',
        models: [ 'articleSection', 'globalsPart', 'articleContent', 'page'],
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
