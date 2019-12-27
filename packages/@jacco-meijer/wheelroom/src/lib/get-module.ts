import { getAppDir } from './get-app-dir'

/** import a node module from 'node_modules'. If the moduleName is prefixed
 * with 'path/to/module:' that path will be used instead of 'node_modules'
 */
export const getModule = async (moduleResolve: string) => {
  let errorMessage = ''

  const [firstParm, secondParm] = moduleResolve.split(':')

  const moduleName = secondParm ? secondParm : firstParm
  const localModulePath = secondParm ? firstParm : null

  /**
   *
   * Using only module name looks up module in the wheelroom package
   * node_modules folder, while the loopup should be in the boilerplate
   * node_modules folder. Using the app dir solves this but requires us to point
   * to the actual js entry point.
   *
   */
  const moduleDir = localModulePath
    ? `${getAppDir()}/${localModulePath}/${moduleName}/dist/index.js`
    : `${getAppDir()}/node_modules/${moduleName}/dist/index.js`

  try {
    const module = await import(moduleDir)
    return module
  } catch (error) {
    errorMessage = `Could not import ${moduleDir}: ${error}`
    console.log(errorMessage)
    return null
  }
}
