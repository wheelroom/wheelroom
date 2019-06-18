import * as dotenv from 'dotenv'

const isDevelopment = process.env.gatsby_executing_command === 'develop'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const cfConfig = {
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
}

const gtmConfig = {
  gtmAuth: process.env.GTM_AUTH_STRING,
  gtmPreview: process.env.GTM_PREVIEW_NAME,
  id: process.env.GTM_ID,
  includeInDevelopment: false,
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
    'gatsby-plugin-offline',
    'gatsby-plugin-tslint',
    'gatsby-plugin-typescript',
    {
      options: cfConfig,
      resolve: 'gatsby-source-contentful',
    },
    {
      options: gtmConfig,
      resolve: 'gatsby-plugin-google-tagmanager',
    },
    {
      options: {},
      resolve: `gatsby-plugin-emotion`,
    },
  ],
}
