import * as dotenv from 'dotenv'

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

const cfConfig = {
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
}

if (!cfConfig.spaceId || !cfConfig.accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  plugins: [
    'gatsby-plugin-offline',
    {
      options: cfConfig,
      resolve: 'gatsby-source-contentful',
    },
  ],
}
