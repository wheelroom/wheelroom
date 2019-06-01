import { Context } from './types'

const getModulePath = (resolve, postFix, modelNames) => {
  const appDir = process.env.PWD
  const paths = []
  if (!modelNames) {
    return paths
  }
  modelNames.forEach(modelName => {
    const path =
      appDir +
      '/' +
      'node_modules/' +
      resolve +
      '/dist/components/' +
      modelName +
      postFix +
      '/model.js'

    paths.push(path)
  })
  return paths
}

export const getModels = async (context: Context) => {
  const appDir = process.env.PWD
  const paths = []
  let wheelroomConfig
  try {
    wheelroomConfig = await import(appDir + '/wheelroom-config.js')
  } catch (error) {
    console.error('Could not find wheelroom-config.js')
  }
  wheelroomConfig.plugins.forEach(plugin => {
    paths.push(...getModulePath(plugin.resolve, '-part', plugin.parts))
    paths.push(...getModulePath(plugin.resolve, '-content', plugin.content))
    paths.push(...getModulePath(plugin.resolve, '-section', plugin.sections))
  })
  context.modelPaths = paths
  paths.forEach(async (path: string) => {
    let model
    console.log('Reading model from', path)
    try {
      path = 'wheelroom-basics'
      model = await import(path)
    } catch (error) {
      console.error(error)
    }
    console.log(model)
  })
}
