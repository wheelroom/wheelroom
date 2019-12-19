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

  const moduleDir = localModulePath
    ? `${getAppDir()}/${localModulePath}/${moduleName}`
    : `${getAppDir()}/node_modules/${moduleName}`

  try {
    return await import(moduleDir)
  } catch (error) {
    errorMessage = `Could not import ${moduleDir}: ${error}`
    console.log(errorMessage)
    return null
  }
}
