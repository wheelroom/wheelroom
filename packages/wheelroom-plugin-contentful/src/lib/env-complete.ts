const variableMissing = (varName: string): boolean => {
  if (!process.env[varName]) {
    console.log(`Missing required .env variable ${varName}`)
    return true
  }
  return false
}

export const envComplete = (): boolean => {
  const anyMissing: boolean =
    variableMissing('CONTENTFUL_SPACE_ID') ||
    variableMissing('CONTENTFUL_DELIVERY_TOKEN') ||
    variableMissing('CONTENTFUL_CMA_TOKEN') ||
    variableMissing('CONTENTFUL_ENVIRONMENT')
  if (anyMissing) {
    return false
  }

  if (process.env.WHEELROOM_PROJECT_NAME) {
    console.log(`Project: ${process.env.WHEELROOM_PROJECT_NAME}`)
  }
  if (process.env.CONTENTFUL_ENVIRONMENT) {
    console.log(`Environment: ${process.env.CONTENTFUL_ENVIRONMENT}`)
  }
  console.log(`Contentful space: ${process.env.CONTENTFUL_SPACE_ID}`)
  return true
}
