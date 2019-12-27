import { WheelroomConfig } from '../types/wheelroom-config'
import { getAppDir } from './get-app-dir'

/** Read wheelroom-config.js from current working directory */
export const readConfig = async () => {
  let config
  const target = `${getAppDir()}/wheelroom-config.js`
  try {
    config = await import(target)
  } catch (error) {
    console.log(`Could not load and parse: ${target}`)
    console.log(error)
  }
  return config.config as WheelroomConfig
}
