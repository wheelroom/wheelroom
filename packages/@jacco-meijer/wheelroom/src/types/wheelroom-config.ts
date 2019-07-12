import {
  componentLocale,
  componentType,
  componentVariations,
  nodeModuleName,
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

export interface Plugin {
  /** The module that exports the commandsMap */
  resolve: nodeModuleName
  /** Plugin options */
  options: any
}

export interface WheelroomConfig {
  /** Locale being server from the root path */
  defaultLocale: componentLocale
  /** When demo page content is created, this section is used */
  initialPageSection: string
  /** Default value for componentType.resolve */
  defaultComponentResolve: nodeModuleName
  componentTypes: {
    [componentType: string]: WheelroomComponent
  }
  plugins: Plugin[]
}
