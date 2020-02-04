import dotenv from 'dotenv'

// Load environment from .env in development mode
if (process.env.NODE_ENV === 'development') {
  const dotEnvResult = dotenv.config()
  if (dotEnvResult.error) {
    throw dotEnvResult.error
  }
}

const cfConfig: any = {
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
}

// Pass CONTENTFUL_ENVIRONMENT when available
if (process.env.CONTENTFUL_ENVIRONMENT) {
  cfConfig.environment = process.env.CONTENTFUL_ENVIRONMENT
}

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
  ],
}
