import { WheelroomConfig } from '../types/wheelroom-config'
import { NamedPaths } from './named-paths'
import { PassedToPlugins } from './passed-to-plugins'

export interface ContentfulNode {
  id: string
  [key: string]: string
}

export interface ContentfulObject {
  node: ContentfulNode
  node_locale: string
}

export interface PluginOptions {
  /** Path to the page template used to generate each page */
  pageTemplate: string
}

export interface GatsbyNodeContext {
  /** All configured models */
  passedToPlugin: PassedToPlugins
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
  [componentTypeIdKey: string]: string | NamedPaths | WheelroomConfig
}

export interface GetPageContext {
  context: GatsbyNodeContext
  page: ContentfulNode
  subPage?: ContentfulObject
  /** Contentful model type */
  pageType: string
}
