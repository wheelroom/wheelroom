/* eslint-disable @typescript-eslint/no-var-requires */
packageJson = require('./package.json')
path = require('path')
const globalsQuery = require('./src/models/globals/query')
const pageQuery = require('./src/models/page/query')
const dotenv = require('dotenv')

/**
 * Load environment from .env in development mode
 */

if (process.env.NODE_ENV === 'development') {
  const dotEnvResult = dotenv.config()
  if (dotEnvResult.error) {
    throw dotEnvResult.error
  }
}

const cfConfig = {
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
}
// Override env setting here, so that Netlify can build this branch
// cfConfig.environment = 'newModels'

if (!cfConfig.spaceId || !cfConfig.accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  plugins: [
    {
      options: cfConfig,
      resolve: 'gatsby-source-contentful',
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
        background_color: '#222222',
        display: 'standalone',
        icon: 'src/favicon.png', // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
        name: 'Wheelroom boilerplate',
        short_name: 'boilerplate',
        start_url: '/',
        theme_color: '#222222',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      options: {
        exclude: /(node_modules|.cache|public|@wheelroom\/|)/,
      },
      resolve: 'gatsby-plugin-eslint',
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
    siteUrl: 'https://www.wheelroom.io',
    legal: {
      version: packageJson.wheelroom.version,
      description: 'Made with Wheelroom',
      url: 'https://www.wheelroom.io',
    },
    secrets: {
      environment: cfConfig.environment,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      spaceId: cfConfig.spaceId,
    },
  },
}
