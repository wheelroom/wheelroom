import chalk from 'chalk'
import { config } from 'dotenv'

export const getAndValidateEnv = () => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  const envPath = `.env.${nodeEnv}`
  const log = console.log
  config({ path: envPath })
  let isValid = true
  if (!process.env.WHEELROOM_PROJECT_NAME) {
    log(chalk.blue(`- WHEELROOM_PROJECT_NAME env variable not found`))
  }
  if (!process.env.CONTENTFUL_SPACE_ID) {
    log(chalk.red(`- CONTENTFUL_SPACE_ID env variable is missing`))
    isValid = false
  }
  if (!process.env.CONTENTFUL_CMA_TOKEN) {
    log(chalk.red(`- CONTENTFUL_CMA_TOKEN env variable is missing`))
    isValid = false
  }
  if (!process.env.CONTENTFUL_ENVIRONMENT) {
    log(chalk.red(`- CONTENTFUL_ENVIRONMENT env variable is missing`))
    isValid = false
  }
  return isValid
}
