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

export const getModels = async (context: Context) => {
  const appDir = process.env.PWD
  context.models = []
  let wheelroomConfig
  try {
    wheelroomConfig = await import(appDir + '/wheelroom-config.js')
  } catch (error) {
    console.log('Could not find wheelroom-config.js')
  }
  wheelroomConfig.plugins.forEach(plugin => {
    context.models.push(
      ...getModuleObjects(plugin.resolve, 'part', plugin.parts)
    )
    context.models.push(
      ...getModuleObjects(plugin.resolve, 'content', plugin.content)
    )
    context.models.push(
      ...getModuleObjects(plugin.resolve, 'section', plugin.sections)
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
