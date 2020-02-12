/* eslint-disable @typescript-eslint/no-var-requires */
packageJson = require('./package.json')
path = require('path')

const globalsQuery = require('./src/components/globals/query')
const pageQuery = require('./src/components/page/query')

module.exports = {
  plugins: [
    {
      options: {
        defaultLocale: 'en-US',
        pageTemplate: path.resolve('./src/page-template.tsx'),
        queries: [globalsQuery, pageQuery],
      },
      resolve: `gatsby-theme-wheelroom`,
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#E8E8E8',
        display: 'standalone',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
        name: 'Wheelroom boilerplate',
        short_name: 'boilerplate',
        start_url: '/',
        theme_color: '#86C2A1',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-eslint',
    {
      options: {},
      resolve: `gatsby-plugin-emotion`,
    },
    {
      options: {
        google: {
          families: ['Fjalla+One:400', 'Open+Sans:400'],
        },
      },
      resolve: 'gatsby-plugin-web-font-loader',
    },
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        update: false,
      },
    },
  ],
  siteMetadata: {
    siteVersion: packageJson.version,
  },
}
