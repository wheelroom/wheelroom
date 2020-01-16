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
    'gatsby-plugin-tslint',
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
  ],
  siteMetadata: {
    siteVersion: packageJson.version,
  },
}
