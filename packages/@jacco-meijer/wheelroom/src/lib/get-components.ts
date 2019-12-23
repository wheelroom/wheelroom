import { Components } from '../types/components.js'
import { WheelroomConfig } from '../types/wheelroom-config.js'
import { readConfig } from './read-config.js'

/** 
 * Rewrite this, build components from config here
 */
export const getComponents = async (wheelroomConfig?: WheelroomConfig) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await readConfig()
  }
  console.log('Building components from', wheelroomConfig)
  const components = {} as Components

  return components
}
