import { nodeModuleName } from '../types/simple-types'
import { getAppDir } from './helpers'

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
