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

export interface ThemeComponentConfig {
  /** The module that exports the componentMap */
  resolve: nodeModuleName
  /** Additional component variations */
  variations: componentVariations
  /** Value true removes the original variations from the model  */
  overwriteVariations: overwriteVariations
}

export interface ThemeOptions {
  /** Locale being server from the root path */
  defaultLocale: componentLocale
  /** Default value for componentType.resolve */
  defaultComponentResolve: nodeModuleName
  /** If set, lookup npm modules at this path */
  resolveLocalModules: nodeModulePath
  componentTypes: {
    [componentType: string]: ThemeComponentConfig
  }
  /** Resolved path to the page template */
  pageTemplate: string
}

export interface GatsbyThemeConfig {
  options: ThemeOptions
  resolve: nodeModuleName
}
