import { ComponentConfig } from '../types/component-config'
import { ComponentsMap } from '../types/components-map'
import { componentType, nodeModuleName, path } from '../types/simple-types'
import {
  ComponentToBeResolved,
  ResolveInfo,
  Resolvers,
  WheelroomComponent,
  WheelroomConfig,
} from '../types/wheelroom-config'

export const getAppDir = () => {
  return process.cwd()
}

export const getModule = async (
  moduleName: nodeModuleName,
  localComponentsMap: path
) => {
  let errorMessage = ''
  let module = null
  if (moduleName !== 'localComponentsMap') {
    const npmModuleDir = `${getAppDir()}/node_modules/${moduleName}`
    try {
      module = await import(npmModuleDir)
    } catch (error) {
      errorMessage = `Could not import ${npmModuleDir}: ${error}`
      module = null
    }
    if (module) {
      return module
    }
  } else {
    try {
      module = await import(localComponentsMap)
    } catch (error) {
      errorMessage = `Could not import ${localComponentsMap}: ${error}`
      module = null
    }
    if (module) {
      return module
    }
  }
  console.log(errorMessage)
}

export const getWheelroomConfig = async () => {
  let config
  const target = `${getAppDir()}/wheelroom-config.js`
  try {
    config = await import(target)
  } catch (error) {
    console.log(`Could not load and parse: ${target}`)
    console.log(error)
  }
  return config as WheelroomConfig
}
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
          localComponentsMap: wheelroomConfig.localComponentsMap,
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

interface GetComponentConfigs {
  filter?: string
  wheelroomConfig?: WheelroomConfig
}

export const getComponentConfigs = async ({
  filter,
  wheelroomConfig,
}: GetComponentConfigs) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await getWheelroomConfig()
  }
  const resolvers = getResolvers(wheelroomConfig)
  if (filter) {
    console.log('Filtering by component type', filter)
  }

  const configs = [] as ComponentConfig[]
  await Promise.all(
    Object.entries(resolvers).map(
      async ([moduleName, resolveInfo]: [string, ResolveInfo]) => {
        const module = await getModule(
          moduleName,
          resolveInfo.localComponentsMap
        )
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
            if (filter && toBeResolved.componentType !== filter) {
              return
            }
            if (toBeResolved.componentType in componentsMap) {
              const newConfig = {
                defaultLocale: toBeResolved.defaultLocale,
                initialPageSection: toBeResolved.initialPageSection,
                overwriteVariations: toBeResolved.overwriteVariations,
                sourceModule: moduleName,
                variations: toBeResolved.variations,
                ...componentsMap[toBeResolved.componentType],
              } as ComponentConfig

              configs.push(newConfig)
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

  return configs
}
