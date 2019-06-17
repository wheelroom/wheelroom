export interface ComponentType {
  componentType: string
  variations: string[]
  overwriteVariations: boolean
}

export interface ResolveInfo {
  resolveLocalModules: string
  componentTypes: ComponentType[]
}

export interface Resolvers {
  [moduleName: string]: ResolveInfo
}

export interface ThemeOptions {
  /** Locale being server from the root path */
  defaultLocale: string
  /** Default value for componentType.resolve */
  defaultComponentResolve: string
  /** If set, lookup npm modules at this path */
  resolveLocalModules: string
  componentTypes: {
    /** Contentful component type */
    [componentType: string]: {
      /** The module that exports the componentMap */
      resolve: string
      /** Additional component variations */
      variations: string[]
      /** Value true removes the original variations from the model  */
      overwriteVariations: boolean
    }
  }
  /** Resolved path to the page template */
  pageTemplate: string
}

export interface GatsbyThemeConfig {
  options: ThemeOptions
  resolve: string
}
