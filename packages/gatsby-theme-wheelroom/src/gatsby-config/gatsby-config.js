const result = require('dotenv').config()

const isDevelopment = process.env.gatsby_executing_command === 'develop'

if (result.error) {
  throw result.error
}

const cfConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
}

const gtmConfig = {
  id: process.env.GTM_ID,
  includeInDevelopment: false,
  gtmAuth: process.env.GTM_AUTH_STRING,
  gtmPreview: process.env.GTM_PREVIEW_NAME,
}

// Assert config is present
if (!gtmConfig.id && !(isDevelopment && !gtmConfig.includeInDevelopment)) {
  throw new Error('Google tagmanager id needs to be provided.')
}

if (!cfConfig.spaceId || !cfConfig.accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: cfConfig,
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: gtmConfig,
    },
  ],
}
