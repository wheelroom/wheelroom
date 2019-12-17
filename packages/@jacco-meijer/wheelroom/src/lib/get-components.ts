import { Components } from '../types/components'
import { WheelroomConfig } from '../types/wheelroom-config'
import { readConfig } from './read-config'

/** 
 * Rewrite this, build components from config here
 */
export const getComponents = async (wheelroomConfig?: WheelroomConfig) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await readConfig()
  }
  const components = {} as Components

  return components
}
