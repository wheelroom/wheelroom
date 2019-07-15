import { Component, Components } from '../types/components'
import { componentName, nodeModuleName } from '../types/simple-types'
import {
  ComponentToBeResolved,
  Resolvers,
  WheelroomComponent,
  WheelroomConfig,
} from '../types/wheelroom-config'
import { getModule } from './get-module'
import { readConfig } from './read-config'

/** Resolve is configured per component. Here we group components by the module
 * they are resolved from. To be able to fetch the component config more
 * efficently
 */
const getResolvers = (wheelroomConfig: WheelroomConfig) => {
  const resolvers = {} as Resolvers
  Object.entries(wheelroomConfig.components).forEach(
    ([name, component]: [componentName, WheelroomComponent]) => {
      const componentResolve =
        component.resolve || wheelroomConfig.defaultComponentResolve
      if (!(componentResolve in resolvers)) {
        resolvers[componentResolve] = []
      }
      resolvers[componentResolve].push({
        componentName: name,
        options: component.options,
      })
    }
  )
  return resolvers
}

/** Get component data from components object in wheelroom-config.js. If a
 * config is passed, that config will be used. If not, the config will be loaded
 * from file. Data is returned in a Components object.
 */
export const getComponents = async (wheelroomConfig?: WheelroomConfig) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await readConfig()
  }
  const resolvers = getResolvers(wheelroomConfig)
  const components = {} as Components

  await Promise.all(
    Object.entries(resolvers).map(
      async ([moduleName, componentsToResolve]: [
        nodeModuleName,
        ComponentToBeResolved[]
      ]) => {
        const module = await getModule(moduleName)
        if (!module) {
          return
        }
        console.log(`Imported component module ${moduleName}`)
        if (module && !module.components) {
          console.log(`Could not find components object in ${moduleName}`)
          return
        }

        componentsToResolve.forEach((toBeResolved: ComponentToBeResolved) => {
          if (toBeResolved.componentName in module.components) {
            const newComponent = {
              component: module.components[toBeResolved.componentName],
              options: toBeResolved.options,
              sourceModule: moduleName,
            } as Component

            components[toBeResolved.componentName] = newComponent
          } else {
            console.log(
              `Could not find ${toBeResolved.componentName} in ${moduleName}`
            )
          }
        })
      }
    )
  )
  return components
}
