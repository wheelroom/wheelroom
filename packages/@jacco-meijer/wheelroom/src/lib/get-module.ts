import { nodeModuleName } from '../types/simple-types.js'
import { getAppDir } from './helpers.js'

/** import a node module from 'node_modules'. If the moduleName is prefixed
 * with 'path/to/module:' that path will be used instead of 'node_modules'
 */
export const getModule = async (moduleResolve: nodeModuleName) => {
  let errorMessage = ''

  const [firstParm, secondParm] = moduleResolve.split(':')

  const moduleName = secondParm ? secondParm : firstParm
  const localModulePath = secondParm ? firstParm : null

  // TODO: Find out why postfix /dist/index.js is not resolved from package.json
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
