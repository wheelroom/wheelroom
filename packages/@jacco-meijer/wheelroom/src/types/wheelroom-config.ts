import {
  componentLocale,
  componentType,
  componentVariations,
  nodeModuleName,
  nodeModulePath,
  overwriteVariations,
} from './simple-types'

export interface ComponentToBeResolved {
  componentType: componentType
  /** default locale */
  defaultLocale: componentLocale
  /** When demo page content is created, this section is used */
  initialPageSection: string
  /** Value true removes the original variations from the model  */
  overwriteVariations: overwriteVariations
  /** Additional component variations */
  variations: componentVariations
}

export interface ResolveInfo {
  resolveLocalModules: string
  componentsToResolve: ComponentToBeResolved[]
}

export interface Resolvers {
  [moduleName: string]: ResolveInfo
}

export interface WheelroomComponent {
  /** The module that exports the componentMap */
  resolve: nodeModuleName
  /** Additional component variations */
  variations: componentVariations
  /** Value true removes the original variations from the model  */
  overwriteVariations: overwriteVariations
}

export interface WheelroomConfig {
  /** Locale being server from the root path */
  defaultLocale: componentLocale
  /** When demo page content is created, this section is used */
  initialPageSection: string
  /** Default value for componentType.resolve */
  defaultComponentResolve: nodeModuleName
  /** If set, lookup npm modules at this path */
  resolveLocalModules: nodeModulePath
  componentTypes: {
    [componentType: string]: WheelroomComponent
  }
}
