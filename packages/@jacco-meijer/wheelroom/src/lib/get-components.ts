import { Component, Components } from '../types/components.js'
import { WheelroomConfig } from '../types/wheelroom-config.js'
import { readConfig } from './read-config.js'

/**
 * Rewrite this, build components from config here
 */
export const getComponents = async (wheelroomConfig?: WheelroomConfig) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await readConfig()
  }
  if (
    !('components' in wheelroomConfig) ||
    typeof wheelroomConfig.components !== 'object'
  ) {
    console.error('error: components object not found in wheelroom config')
  }
  if (Object.entries(wheelroomConfig.components).length < 1) {
    console.error('error: no components found in wheelroom config')
  }
  console.log('Building components from', wheelroomConfig)
  Object.entries(wheelroomConfig.components).forEach(
    ([componentName, component]: [string, Component]) => {
      console.log(componentName, '===========================')
      console.log('component:', component)
      console.log('merge in common fields', wheelroomConfig?.commonFields)
      console.log('merge in field defaults', wheelroomConfig?.fieldDefaults)
      console.log('parse field %variables%')
    }
  )

  const components = {} as Components

  return components
}
