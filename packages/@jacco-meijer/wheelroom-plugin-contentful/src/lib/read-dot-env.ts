import * as dotenv from 'dotenv'

export const readDotEnv = () => {
  const dotEnvResult = dotenv.config()
  if (dotEnvResult.error) {
    throw dotEnvResult.error
  }
}
