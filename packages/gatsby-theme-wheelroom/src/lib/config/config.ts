export const getGatsbyConfig = async () => {
  const appDir = process.env.PWD
  let config
  try {
    config = await import(appDir + '/gatsby-config.js')
  } catch (error) {
    console.log('Could not find gatsby-config.js in', appDir, error)
  }
  return config
}

export const getModelConfig = (config: any) => {
  const modelConfigs = []
  config.__experimentalThemes.forEach(theme => {
    modelConfigs.push(
      Object.assign({ resolve: theme.resolve }, theme.options.models)
    )
  })
  return modelConfigs
}
