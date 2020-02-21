/* eslint-disable @typescript-eslint/no-var-requires */
packageJson = require('./package.json')
path = require('path')
const globalsQuery = require('./src/components/globals/query')
const pageQuery = require('./src/components/page/query')
const dotenv = require('dotenv')

/**
 * Load environment from .env in development mode
 *
 * The Contentful deleviery tokens are set by gatsby-theme-wheelroom. These
 * tokens are used for setting up a Contentful preview environment
 *
 */

if (process.env.NODE_ENV === 'development') {
  const dotEnvResult = dotenv.config()
  if (dotEnvResult.error) {
    throw dotEnvResult.error
  }
}

module.exports = {
  plugins: [
    {
      options: {},
      resolve: `gatsby-theme-admin-panel`,
    },
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
    'gatsby-plugin-emotion',
    {
      options: {
        exclude: /(node_modules|.cache|public|gatsby-theme-admin-panel)/,
      },
      resolve: 'gatsby-plugin-eslint',
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
        // When updating the schema, make sure all models have content and all
        // fields have a value.
        update: false,
      },
    },
  ],
  siteMetadata: {
    siteVersion: packageJson.version,
    secrets: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
    },
  },
}
