import { config } from 'dotenv'

export const getAndValidateEnv = () => {
  // TODO: Validate env
  const nodeEnv = process.env.NODE_ENV || 'development'
  const envPath = `.env.${nodeEnv}`
  config({ path: envPath })
}

// WHEELROOM_PROJECT_NAME
// CONTENTFUL_SPACE_ID
// CONTENTFUL_CMA_TOKEN
// CONTENTFUL_ENVIRONMENT
