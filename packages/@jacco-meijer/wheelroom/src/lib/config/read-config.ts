import { WheelroomConfig } from '../../types/wheelroom-config'

/**
 * Read wheelroom-config.js from a given path
 */
export const readConfig = async (configPath: string, customTarget?: string) => {
  let config
  const target = customTarget || `${configPath}/wheelroom-config.js`
  try {
    config = await import(target)
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log(`Could not find module: ${target}`)
    } else {
      // In case of a parser error, print full error
      console.log(error)
    }
    return
  }
  return config.config as WheelroomConfig
}
