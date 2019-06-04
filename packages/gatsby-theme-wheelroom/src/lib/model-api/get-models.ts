import { Context, ModelInfo } from './types'

const getModuleObjects = (
  resolve: string,
  postFix: string,
  modelNames: string[]
): ModelInfo[] => {
  const appDir = process.env.PWD
  const models = [] as any[]
  if (!modelNames) {
    return []
  }
  modelNames.forEach(modelName => {
    const modelPath =
      appDir +
      '/' +
      'node_modules/' +
      resolve +
      '/dist/components/' +
      modelName +
      '-' +
      postFix +
      '/model.js'

    models.push({
      model: null,
      modelName,
      modelPath,
      resolve,
    } as ModelInfo)
  })
  return models
}

const getModelConfig = async () => {
  const appDir = process.env.PWD
  const modelConfigs = []
  let config
  try {
    config = await import(appDir + '/gatsby-config.js')
  } catch (error) {
    console.log('Could not find gatsby-config.js in', appDir, error)
  }
  config.__experimentalThemes.forEach(theme => {
    modelConfigs.push(
      Object.assign({ resolve: theme.resolve }, theme.options.models)
    )
  })
  return modelConfigs
}

export const getModels = async (context: Context) => {
  context.models = []
  const modelConfig = await getModelConfig()
  modelConfig.forEach(config => {
    context.models.push(
      ...getModuleObjects(config.resolve, 'part', config.parts)
    )
    context.models.push(
      ...getModuleObjects(config.resolve, 'content', config.content)
    )
    context.models.push(
      ...getModuleObjects(config.resolve, 'section', config.sections)
    )
  })

  await Promise.all(
    context.models.map(async model => {
      try {
        // TODO: This needs error checking, reporting and documentation
        const importedModel = await import(model.modelPath)
        model.model = importedModel.default
      } catch (error) {
        console.log(error)
      }
    })
  )
}
