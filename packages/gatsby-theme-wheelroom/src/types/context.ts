import { Components } from '@jacco-meijer/wheelroom'
import { NamedPaths } from './named-paths.js'

export interface ContentfulNode {
  id: string
  [key: string]: string
}

export interface ContentfulObject {
  node: ContentfulNode
  node_locale: string
}

export interface PluginOptions {
  /** The url of the default locale is set to '/' */
  defaultLocale: string
  /** Path to the page template used to generate each page */
  pageTemplate: string
}

export interface Context {
  /** All configured models */
  components: Components
  /** Contains for each named path: path: raw path, xx: localized xx path */
  namedPaths: NamedPaths
  /** The plugin configuration options */
  options: PluginOptions
  queries: {
    /** Each key contains the results of a global query */
    [modelWheelroomType: string]: {
      [componentId: string]: ContentfulObject[]
    }
  }

  createPage(params: object): Promise<any>
  graphql(query: string): Promise<any>
}

export interface PageContext {
  locale: string
  namedPaths: NamedPaths
  [componentTypeIdKey: string]: string | NamedPaths
}

export interface GetPageContext {
  context: Context
  page: ContentfulNode
  subPage?: ContentfulObject
  /** Contentful model type */
  pageType: string
}
