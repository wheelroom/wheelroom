packageJson = require('./package.json')
path = require('path')

const articleQuery = require('./src/graphql/article-query')
const globalsQuery = require('./src/graphql/globals-query')
const pageQuery = require('./src/graphql/page-query')

module.exports = {
  plugins: [
    {
      options: {
        defaultLocale: 'nl',
        pageTemplate: path.resolve('./src/page-template.tsx'),
        queries: [articleQuery, globalsQuery, pageQuery],
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
