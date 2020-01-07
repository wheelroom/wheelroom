packageJson = require('./package.json')
path = require('path')

const globalsQuery = require('./src/components/globals/query')
const pageQuery = require('./src/components/page/query')

module.exports = {
  plugins: [
    {
      options: {
        defaultLocale: 'nl',
        pageTemplate: path.resolve('./src/page-template.tsx'),
        queries: [globalsQuery, pageQuery],
      },
      resolve: `gatsby-theme-wheelroom`,
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    {
      options: {},
      resolve: `gatsby-plugin-emotion`,
    },
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
