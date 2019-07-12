import { ComponentConfig } from '../types/component-config'
import { ComponentsMap } from '../types/components-map'
import { PassedToPlugins } from '../types/passed-to-plugins'
import { componentType } from '../types/simple-types'
import {
  ComponentToBeResolved,
  ResolveInfo,
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
  Object.entries(wheelroomConfig.componentTypes).forEach(
    ([type, component]: [componentType, WheelroomComponent]) => {
      const moduleName =
        component.resolve || wheelroomConfig.defaultComponentResolve
      if (!(moduleName in resolvers)) {
        resolvers[moduleName] = {
          componentsToResolve: [] as ComponentToBeResolved[],
          // localComponentsMap: wheelroomConfig.localComponentsMap,
        }
      }
      resolvers[moduleName].componentsToResolve.push({
        componentType: type,
        defaultLocale: wheelroomConfig.defaultLocale,
        initialPageSection: wheelroomConfig.initialPageSection,
        overwriteVariations: component.overwriteVariations || false,
        variations: component.variations || [],
      })
    }
  )
  return resolvers
}

export const getPassedToPlugins = async (wheelroomConfig: WheelroomConfig) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await readConfig()
  }
  const resolvers = getResolvers(wheelroomConfig)

  const passedToPlugins = {
    componentConfigs: [],
    defaultLocale: wheelroomConfig.defaultLocale,
  } as PassedToPlugins

  await Promise.all(
    Object.entries(resolvers).map(
      async ([moduleName, resolveInfo]: [string, ResolveInfo]) => {
        const module = await getModule(moduleName)
        if (!module) {
          return
        }
        console.log(`Imported module ${moduleName}`)
        if (module && !module.componentsMap) {
          console.log(`Could not find componentsMap object in ${moduleName}`)
          return
        }
        const componentsMap = module.componentsMap as ComponentsMap
        resolveInfo.componentsToResolve.forEach(
          (toBeResolved: ComponentToBeResolved) => {
            if (toBeResolved.componentType in componentsMap) {
              const newConfig = {
                defaultLocale: toBeResolved.defaultLocale,
                initialPageSection: toBeResolved.initialPageSection,
                overwriteVariations: toBeResolved.overwriteVariations,
                sourceModule: moduleName,
                variations: toBeResolved.variations,
                ...componentsMap[toBeResolved.componentType],
              } as ComponentConfig

              passedToPlugins.componentConfigs.push(newConfig)
            } else {
              console.log(
                `Could not find ${toBeResolved.componentType} in ${moduleName}`
              )
            }
          }
        )
      }
    )
  )

  return passedToPlugins
}
