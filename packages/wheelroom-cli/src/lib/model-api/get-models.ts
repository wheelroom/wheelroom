const getModulePath = (resolve, postFix, modelNames) => {
  const paths = []
  if (!modelNames) {
    return paths
  }
  modelNames.forEach(modelName => {
    const path =
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

export const getModels = () => {
  const appDir = process.env.PWD
  import(appDir + '/wheelroom-config.js').then(data => {
    const paths = []
    data.plugins.forEach(plugin => {
      paths.push(...getModulePath(plugin.resolve, '-part', plugin.parts))
      paths.push(...getModulePath(plugin.resolve, '-content', plugin.content))
      paths.push(...getModulePath(plugin.resolve, '-section', plugin.sections))
    })
    console.log(paths)
  })
}
