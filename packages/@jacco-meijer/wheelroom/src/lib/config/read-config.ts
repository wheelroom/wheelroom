import { WheelroomConfig } from '../../types/wheelroom-config'

/**
 * Read wheelroom-config.js from a given path
 */
export const readConfig = async (configPath: string) => {
  let config
  const target = `${configPath}/wheelroom-config.js`
  try {
    config = await import(target)
  } catch (error) {
    console.log(`Could not load and parse: ${target}`)
    console.log(error)
  }
  return config.config as WheelroomConfig
}
